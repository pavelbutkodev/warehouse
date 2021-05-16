import React, {useRef, useState} from "react";

import styles from './styles.module.scss';
import Button from "../Button";
import {useDispatch, useSelector} from "react-redux";
import {moveProdFromWare, moveProdInWare} from "../../../store/core/actions";
import {getWarehouse} from "../../../store/core/selector";


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
		dispatch(moveProdInWare({
			name: moveItem,
			count: valueProd,
			wareIn: wareIn,
		}))

		dispatch(moveProdFromWare({
			name: moveItem,
			count: valueProd,
			wareFrom: wareFrom,
		}))
		onClose()
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
						{wareFromProd.count} шт.
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