import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {
	removeAllProdFromWare,
	removeProdFromWare,
	warehouseFromGeneral
} from "../../../store/core/actions";

import {getProducts} from "../../../store/core/selector";
import Button from "../Button";

import styles from './styles.module.scss';


const ModalWarehouse = ({onClose, text, type, prodCount, prodName, warehouseName}) => {
	const dispatch = useDispatch();
	const products = useSelector(getProducts)
	const [form, setForm] = useState({
		name: '',
		count: '',
	})
	const [inputAddProd, setInputAddProd] = useState([])
	const [inputValue, setInputValue] = useState([])
	const [radio, setRadio] = useState('first')
	const inputEl = useRef(null);


	const changeInputValue = (e, trigger) => {
		setInputValue((prevValue) => {
			console.log('=====>prevValue.name', prevValue);
			console.log('=====>trigger', trigger);
			if (prevValue && prevValue.name === trigger) {
				return (
					[
						...prevValue,
						{
							name: trigger,
							count: e.target.value
						},
					])
			} else if (prevValue) {
				return (
					[
						...prevValue,
						{
							name: trigger,
							count: e.target.value
						},
					])
			}
			return prevValue
		})
		console.log('=====>inputValue', inputValue);

	}



	useEffect(() => {
		// products.forEach(el => {
		// 	setInputValue((prevState => ({
		// 		...prevState,
		// 		[el.name]: 0,
		// 	})))
		// })
	}, [])

	const handleClickAdd = (product, symbol) => {
		if (symbol === '-') {
			setInputValue((prevValue) => ({
				...prevValue,
				[product.name]: +inputValue[`${product.name}`] - 1,
			}))
		} else if (symbol === '+') {
			setInputValue((prevValue) => ({
				...prevValue,
				[product.name]: +inputValue[`${product.name}`] + 1,
			}))
		}
	}

	const handleClick = () => {
		if (type === 'add') {
			console.log('=====>inputValue', inputValue);
			setInputAddProd((prevProd) => ([
				...prevProd,
				{
					name: inputValue.name,
					count: inputValue
				}
			]))
			console.log('=====>inputAddProd', inputAddProd);
			// dispatch(addProd({id: products.length, name: form.name, count: form.count}))
			onClose();
		} else if (type === 'remove') {
			if (radio === 'first') {
				dispatch(warehouseFromGeneral({prodCount, prodName, warehouseName}))
				dispatch(removeAllProdFromWare({prodName, warehouseName}))
				onClose();
			} else {
				dispatch(warehouseFromGeneral({prodCount: form.count, prodName, warehouseName}))
				dispatch(removeProdFromWare({prodCount: form.count, prodName, warehouseName}))
				onClose();
			}
		}
	}

	const handleChange = (e, trigger) => {
		setForm((prevForm) => ({
				...prevForm,
				[trigger]: e.target.value,
			}
		))
	}

	const handleCloseModal = (e) => {
		if (e.target === inputEl.current) {
			onClose()
		}
	}

	return (
		<div ref={inputEl} onClick={handleCloseModal} className={styles.modalWrapper}>
			<div className={styles.modalWrapperInside}>
				{type === 'add'
					? <>
						<h2>Нераспределенные продукты</h2>
						{products.map(product => (
							<div className={styles.productRow}>
								<p className={styles.warehouseName}>
									{product.name}
								</p>
								<div className={styles.tableBtns}>
									<p>
										<span
											onClick={() => handleClickAdd(product, '-')}
											className={styles.sings}
										>
											-
										</span>
										<input
											placeholder='0'
											maxLength={2}
											type="text"
											onChange={(e) => changeInputValue(e, product.name)}
										/>
										<span>/</span>
										{product.count} шт.
										<span
											onClick={() => handleClickAdd(product, '+')}
											className={styles.sings}
										>
											+
										</span>
									</p>
								</div>
							</div>
						))}
						<div className={styles.buttonPanel}>
							<Button onClick={handleClick} type='add' name={text}/>
						</div>
					</>
					: <>
						<h2>Удалить товар</h2>
						<div className={styles.radioPanel}>
							<div>
								<input
									type="radio"
									id="1"
									value="email"
									checked={radio === 'first'}
									onClick={() => setRadio('first')}
								/>
								<label htmlFor="1">Удались весь товар</label>
							</div>
							<div>
								<input
									type="radio"
									id="2"
									value='email'
									checked={radio === 'second'}
									onClick={() => setRadio('second')}
								/>
								<label htmlFor="2">Удалить конкретное количество</label>
							</div>
						</div>
						<div style={radio === 'first' ? {opacity: .3} : {}} className={styles.infoPanel}>
							<p>Какое количество вы хотите удалить?</p>
							<div>
								<input
									placeholder='0'
									maxLength={2}
									disabled={radio === 'first'}
									type="text"
									onChange={(e) => handleChange(e, 'count')}
									value={form.count}
								/>
								<span>/</span>
								<p>{prodCount}</p>
							</div>
						</div>
						<div className={styles.buttonPanel}>
							<Button onClick={handleClick} type='move' name={text}/>
						</div>
					</>}
			</div>
		</div>
	)
}

export default ModalWarehouse;