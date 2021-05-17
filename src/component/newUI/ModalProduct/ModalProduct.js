import React, {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {addProd, changeProd, removeProd} from "../../../store/core/actions";
import Button from "../Button";

import styles from './styles.module.scss';
import {toast} from "react-toastify";
import {getProducts} from "../../../store/core/selector";


const ModalProduct = ({onClose, text, type, count, name}) => {
	const dispatch = useDispatch();
	const [form, setForm] = useState({
		name: '',
		count: '',
	})
	const [radio, setRadio] = useState('first')
	const inputEl = useRef(null);
	const inputText = ['Название товара', 'Количество товара']
	const products = useSelector(getProducts);

	const handleClick = () => {
		if (type === 'add') {
			if (!form.name) {
				toast.error('Введите название товара!');
			} else if (!form.count) {
				toast.error('Введите количество товара!');
			} else if (products.filter(prod => prod.name === form.name).length > 0) {
				toast.error('Продукт с таким именем уже существует!');
			} else {
				toast.success('Продукт успешно добавлен!');
				dispatch(addProd({name: form.name, count: form.count}))
				onClose();
			}
		} else if (type === 'remove') {
			if (radio === 'first') {
				toast.success('Продукт удален!')
				dispatch(removeProd(name))
				onClose();
			} else {
				toast.success('Продукт удален!')
				dispatch(changeProd({name, count: form.count}))
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
						<h2>Добавить товар</h2>
						<div className={styles.inputPanel}>
							<>
								<input onChange={(e) => handleChange(e, 'name')} placeholder={inputText[0]} type="text"/>
								<input onChange={(e) => handleChange(e, 'count')} placeholder={inputText[1]} type="text"/>
							</>
						</div>
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
								<p>{count}</p>
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

export default ModalProduct;