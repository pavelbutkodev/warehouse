import React, {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getWarehouse} from "../../../store/core/selector";
import {addWarehouse, changeWarehouse, removeWarehouse} from "../../../store/core/actions";
import Button from "../Button";

import styles from './styles.module.scss';

const ModalWarehouse = ({onClose, text, type, id}) => {
	const getWarehouses = useSelector(getWarehouse);
	const dispatch = useDispatch();
	const [form, setForm] = useState('')
	const inputEl = useRef(null);

	const inputText = [
		{text: 'Название склада'},
	]

	const handleClick = () => {
		if (type === 'add') {
			dispatch(addWarehouse({id: getWarehouses.length, name: form, products: []}))
			onClose();
		} else if (type === 'change') {
			dispatch(changeWarehouse({id: id, name: form}))
			onClose();
		} else if (type === 'remove') {
			dispatch(removeWarehouse(id))
			onClose();
		}
	}

	const handleChange = (e) => {
		setForm(e.target.value);
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
						? 'Добавить склад'
						: type === 'change'
							? 'Редактировать склад'
							: 'Удалить склад'
					}
				</h2>
				<div className={styles.inputPanel}>
					{type !== 'remove'
						? inputText.map(el => (
							<input onChange={handleChange} placeholder={el.text} type="text"/>
						))
						: <p>Вы действительно хотите удалить склад?</p>
					}
				</div>
				<div className={styles.buttonPanel}>
					<Button onClick={handleClick} type={type === 'add' ? 'add' : 'move'} name={text}/>
				</div>
			</div>
		</div>
	)
}

export default ModalWarehouse;