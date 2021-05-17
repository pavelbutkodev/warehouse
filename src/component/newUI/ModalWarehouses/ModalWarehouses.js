import React, {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {
	addWarehouses,
	changeWarehouses,
	removeWarehouses,
	warehousesFromGeneral
} from "../../../store/core/actions";
import Button from "../Button";

import styles from './styles.module.scss';
import {getWarehouse} from "../../../store/core/selector";
import {toast} from "react-toastify";


const ModalWarehouses = ({onClose, text, type, id}) => {
	const warehouses = useSelector(getWarehouse)
	const dispatch = useDispatch();
	const [form, setForm] = useState('')
	const inputEl = useRef(null);

	const inputText = [
		{text: 'Название склада'},
	]

	const handleClick = () => {
		if (type === 'add') {
			if (warehouses.filter(el => el.name === form).length > 0) {
				toast.error('Склад с таким именем уже существует!');
			} else if (!form) {
				toast.error('Введите имя склада!');
			} else {
				toast.success('Склад добавлен!');
				dispatch(addWarehouses({id: Date.now(), name: form, products: []}))
				onClose();
			}
		} else if (type === 'change') {
			if (form) {
				dispatch(changeWarehouses({id: id, name: form}))
				toast.success('Склад изменен!');
				onClose();
			} else {
				toast.error('Введите коррентное название склада!');
			}
		} else if (type === 'remove') {
			warehouses.filter(el => el.id === +id)[0].products.map(ware => {
				dispatch(warehousesFromGeneral({prodName: ware.name, prodCount: ware.count}))
			})
			dispatch(removeWarehouses(id))
			toast.success('Склад удален!');
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

export default ModalWarehouses;