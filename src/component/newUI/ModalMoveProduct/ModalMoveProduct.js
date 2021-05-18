import React, {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {addProdInWarehouse, moveProdFromWare} from "../../../store/core/actions";
import {getWarehouse} from "../../../store/core/selector";
import Button from "../Button";

import styles from './styles.module.scss';
import {toast} from "react-toastify";


const ModalMoveProduct = ({onClose, moveItem, wareFrom, wareIn}) => {
	const dispatch = useDispatch();
	const inputEl = useRef(null);
	const [valueProd, setValueProd] = useState(null)
	const wareFromProd = useSelector(getWarehouse).filter(el => el.id === +wareFrom)[0].products.filter(prod => prod.name === moveItem)[0];

	const handleCloseModal = (e) => {
		if (e.target === inputEl.current) {
			onClose()
		}
	}

	const handleInputChange = (e) => {
		setValueProd(e.target.value)
	}

	const handleSendProduct = () => {
		console.log('======> wareFromProd?.count',  wareFromProd?.count);
		console.log('======>valueProd', valueProd);
		if (valueProd > wareFromProd?.count || valueProd <= 0) {
			toast.error('Введите корректное значение!');
		} else {
			toast.success('Вы успешно переместили товар!');
			dispatch(addProdInWarehouse({warehouseName: wareIn, prodName: moveItem, prodCount: valueProd}))
			dispatch(moveProdFromWare({warehouseId: wareFrom, prodName: moveItem, prodCount: valueProd}))
			onClose()
		}
	}

	const handleClickAdd = (symbol) => {
		if (symbol === '-') {
			setValueProd(valueProd - 1)
		} else if (symbol === '+') {
			setValueProd(valueProd + 1)
		}
	}

	return (
		<div ref={inputEl} onClick={handleCloseModal} className={styles.modalMoveWrapper}>
			<div className={styles.modalWrapperInside}>
				<div className={styles.tableBtns}>
					<p>Количество продукта</p>
					<div>
						<span
							onClick={() => handleClickAdd('-')}
							className={styles.sings}
						>
						 -
						</span>
						<input
							placeholder='0'
							maxLength={2}
							type="text"
							onChange={handleInputChange}
							value={valueProd}
						/>
						<span>/</span>
						{wareFromProd?.count} шт.
						<span
							onClick={() => handleClickAdd('+')}
							className={styles.sings}
						>
						 +
						</span>
					</div>
				</div>
				<Button onClick={handleSendProduct} name='Добавить продукт' type='add'/>
			</div>
		</div>
	)
}

export default ModalMoveProduct;