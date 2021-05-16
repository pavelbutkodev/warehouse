import React, {useState} from "react";

import Button from "../Button";

import moveProd from '../../../assets/img/moveProduct.svg';
import arrowRight from '../../../assets/img/arrowRight.svg';
import styles from './styles.module.scss';
import {useSelector} from "react-redux";
import {getWarehouse} from "../../../store/core/selector";
import ModalMoveProduct from "../ModalMoveProduct";
import {useParams} from "react-router-dom";


const MoveProducts = () => {
	const {id} = useParams()
	const warehouses = useSelector(getWarehouse)
	const [secondSelect, setSecondSelect] = useState('')
	const [showImg, setShowImg] = useState(false)
	const [moveItem, setMoveItem] = useState();
	const [showModalMove, setShowModalMove] = useState(false);

	const dragStartHandler = (e, name) => {
		setMoveItem(name)
	}

	const dragEndHandler = (e, name) => {
		// e.target.style.background = 'white';
	}

	function dragOverHandler(e) {
		e.preventDefault()
		// e.target.style.background = 'lightgray';
		setShowImg(true)
	}

	const dropHandler = (e, type) => {
		e.preventDefault()
		setShowImg(false)
		if (type === 'second') {
			setShowModalMove(true)
		}
	}

	return (
		<div className={styles.moveProductsWrapper}>
			<h2 className={styles.headName}>Перемещение товаров</h2>
			<div className={styles.warehousesPanel}>
				<div className={styles.warehousePanel}>
					<h2>Из {warehouses.filter(ware => ware.id === +id)[0].name}</h2>
					<div className={styles.productRowScroll}>
						{warehouses.filter(ware => ware.id === +id)[0]?.products.map(product => (
							<div
								draggable={true}
								onDragStart={(e) => dragStartHandler(e, product.name)}
								onDragLeave={(e) => dragEndHandler(e)}
								onDragEnd={(e) => dragEndHandler(e)}
								onDragOver={(e) => dragOverHandler(e)}
								onDrop={(e) => dropHandler(e, 0)}
								className={styles.productRow}
							>
								<p className={styles.warehouseName}>
									{product.name}
								</p>
								<div className={styles.tableBtns}>
									<p>
										{product.count} шт.
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
				{secondSelect && showImg && <div className={styles.arrowPanel}>
					<img src={arrowRight} alt=""/>
				</div>}
				<div
					draggable
					className={styles.warehousePanel}
					onDragStart={(e) => dragStartHandler(e)}
					onDragLeave={(e) => dragEndHandler(e)}
					onDragEnd={(e) => dragEndHandler(e)}
					onDragOver={(e) => dragOverHandler(e)}
					onDrop={(e) => dropHandler(e, 'second')}
				>
					<h2>В
						<select onChange={(e) => setSecondSelect(e.target.value)} name="" id="">
							<option value="" selected disabled hidden>Выбрать склад</option>
							{warehouses.filter(el => el.id !== +id).map(el => (
								<option value={el.name}>{el.name}</option>
							))}
						</select>
					</h2>
					{secondSelect && <div className={`${styles.productRowScroll} ${styles.dragAndDrop}`}>
						{warehouses.filter(el => el.name === secondSelect)[0]?.products.map(product => (
							<>
								{showImg
									? <img className={styles.imgMove} src={moveProd} alt=""/>
									: <div className={styles.productRow}>
										<p className={styles.warehouseName}>
											{product.name}
										</p>
										<div className={styles.tableBtns}>
											<p>
												{product.count} шт.
											</p>
										</div>
									</div>}
							</>
						))}
					</div>}
				</div>
			</div>
			{showModalMove && <ModalMoveProduct
				wareIn={secondSelect}
				wareFrom={id}
				moveItem={moveItem}
				onClose={() => setShowModalMove(false)}
			/>}
		</div>
	)
}

export default MoveProducts;