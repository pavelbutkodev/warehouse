import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {toast} from 'react-toastify';
import {
	addProdInWarehouse,
	removeAllProdFromWare,
	removeProdFromWare,
	warehouseFromGeneral,
} from '../../../store/core/actions';
import {getProducts} from '../../../store/core/selector';
import Button from '../Button';
import styles from './styles.module.scss';


const ModalWarehouse = ({onClose, text, type, prodCount, prodName, warehouseName}) => {
	const dispatch = useDispatch();
	const products = useSelector(getProducts);
	const [form, setForm] = useState({
		name: '',
		count: '',
	});
	const [inputValue, setInputValue] = useState([]);
	const [radio, setRadio] = useState('first');
	const inputEl = useRef(null);

	const changeInputValue = (e, trigger) => {
		setInputValue(inputValue.map((el) => {
			if (el.name === trigger) {
				return (
					{
						name: trigger,
						count: +e.target.value,
					});
			}
			return el;
		}));
	};

	useEffect(() => {
		inputValue.length === 0 && products.forEach((el) => {
			setInputValue((prevValue) => (
				[
					...prevValue,
					{
						name: el.name,
						count: 0,
					},
				]));
		});
	}, [products]);

	const handleClickAdd = (product, symbol) => {
		if (symbol === '-') {
			setInputValue(inputValue.map((el) => {
				if (el.name === product.name) {
					return (
						{
							...el,
							count: el.count - 1,
						});
				}
				return el;
			}));
		} else if (symbol === '+') {
			setInputValue(inputValue.map((el) => {
				if (el.name === product.name) {
					return (
						{
							...el,
							count: el.count + 1,
						});
				}
				return el;
			}));
		}
	};
	const handleClick = () => {
		if (type === 'add') {
			const abs = [];
			const totalScores = inputValue.reduce((previousScore, currentScore) => previousScore + currentScore.count, 0);
			inputValue.filter((prod) => {
				products.forEach((el) => {
					if (el.name === prod.name) {
						if (el.count < prod.count) {
							abs.push(prod);
						} else if (prod.count < 0) {
							abs.push(prod);
						} else if (!totalScores) {
							abs.push(prod);
						}
					}
				});
			});
			if (abs.length > 0) {
				toast.error('Введите корректное количество товара!');
			} else {
				inputValue.map((el) => {
					dispatch(addProdInWarehouse({warehouseName, prodName: el.name, prodCount: el.count}));
				});
				inputValue.map((el) => {
					dispatch(warehouseFromGeneral({
						prodCount: el.count, prodName: el.name, warehouseName, sign: 'add',
					}));
				});
				toast.success('Товар успешно добавлен!');
				onClose();
			}
		} else if (type === 'remove') {
			if (radio === 'first') {
				dispatch(warehouseFromGeneral({
					prodCount, prodName, warehouseName, sign: 'remove',
				}));
				dispatch(removeAllProdFromWare({prodName, warehouseName}));
				toast.success('Товар полностью удален!');
				onClose();
			} else if (form.count <= prodCount && form.count > 0) {
				dispatch(warehouseFromGeneral({
					prodCount: form.count, prodName, warehouseName, sign: 'remove',
				}));
				dispatch(removeProdFromWare({prodCount: form.count, prodName, warehouseName}));
				toast.success('Товар удален!');
				onClose();
			} else {
				toast.error('Введите корректное количество товара!');
			}
		}
	};
	const handleChange = (e, trigger) => {
		setForm((prevForm) => ({
				...prevForm,
				[trigger]: e.target.value,
			}
		));
	};
	const handleCloseModal = (e) => {
		if (e.target === inputEl.current) {
			onClose();
		}
	};
	return (
		<div ref={inputEl} onClick={handleCloseModal} className={styles.modalWrapper}>
			<div className={styles.modalWrapperInside}>
				{type === 'add'
					? (
						<>
							<h2>Нераспределенные продукты</h2>
							{products.map((product) => (
								product.count
									? (
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
														placeholder="0"
														maxLength={2}
														type="text"
														onChange={(e) => changeInputValue(e, product.name)}
														value={inputValue?.filter((el) => el.name === product.name)[0]?.count || 0}
													/>
													<span>/</span>
													{product.count}
													{' '}
													шт.
													<span
														onClick={() => handleClickAdd(product, '+')}
														className={styles.sings}
													>
													+
												</span>
												</p>
											</div>
										</div>
									)
									: null
							))}
							<div className={styles.buttonPanel}>
								<Button onClick={handleClick} type="add" name={text}/>
							</div>
						</>
					)
					: (
						<>
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
										value="email"
										checked={radio === 'second'}
										onClick={() => setRadio('second')}
									/>
									<label htmlFor="2">Удалить конкретное количество</label>
								</div>
							</div>
							<div style={radio === 'first' ? {opacity: 0.3} : {}} className={styles.infoPanel}>
								<p>Какое количество вы хотите удалить?</p>
								<div>
									<input
										placeholder="0"
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
								<Button onClick={handleClick} type="move" name={text}/>
							</div>
						</>
					)}
			</div>
		</div>
	);
};

export default ModalWarehouse;
