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
				<h2>
					{type === 'add'
						? 'Добавить товар'
						: 'Удалить товар'
					}
				</h2>
				<div className={styles.inputPanel}>
					{type !== 'remove'
						? <>
							<input onChange={(e) => handleChange(e, 'name')} placeholder={inputText[0]} type="text"/>
							<input onChange={(e) => handleChange(e, 'count')} placeholder={inputText[1]} type="text"/>
						</>
						: <p>Вы действительно хотите удалить товар?</p>
					}
				</div>
				<div className={styles.buttonPanel}>
					<Button onClick={handleClick} type={type === 'add' ? 'add' : 'move'} name={text}/>
				</div>
			</div>
		</div>
	)
}

export default ModalProduct;