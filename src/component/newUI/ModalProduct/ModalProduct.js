import React, {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getProducts} from "../../../store/core/selector";
import {addProd, removeProd} from "../../../store/core/actions";
import Button from "../Button";

import styles from './styles.module.scss';

const ModalProduct = ({onClose, text, type, id}) => {
	const products = useSelector(getProducts);
	const dispatch = useDispatch();
	const [form, setForm] = useState({
		name: '',
		count: ''
	})
	const [radio, setRadio] = useState('')

	const inputEl = useRef(null);

	const inputText = ['Название товара', 'Количество товара']

	const handleClick = () => {
		if (type === 'add') {
			dispatch(addProd({id: products.length, name: form.name, count: form.count},))
			onClose();
		} else if (type === 'remove') {
			dispatch(removeProd(id))
			onClose();
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
									value="phone"
									checked={radio === 'second'}
									onClick={() => setRadio('second')}
								/>
								<label htmlFor="2">Удалить конкретное количество</label>
							</div>
						</div>
						<div style={radio === 'first' ? {opacity: .3} : {}} className={styles.infoPanel}>
							<p>Какое количество вы хотите удалить?</p>
							<div>
								<input disabled={radio === 'first'} type="text"/>
								/
								<input disabled={radio === 'first'} type="text"/>
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