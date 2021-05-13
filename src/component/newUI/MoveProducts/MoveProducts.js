import React, {useState} from "react";

import Button from "../Button";

import moveProd from '../../../assets/img/moveProduct.svg';
import arrowRight from '../../../assets/img/arrowRight.svg';
import styles from './styles.module.scss';
import {useSelector} from "react-redux";
import {getWarehouse} from "../../../store/core/selector";


const MoveProducts = () => {
	const warehouses = useSelector(getWarehouse)
	const [firstSelect, setFirstSelect] = useState('')
	const [secondSelect, setSecondSelect] = useState('')
	const [showImg, setShowImg] = useState(false)

	const dragStartHandler = (e) => {
	}

	const dragEndHandler = (e) => {
		// e.target.style.background = 'white';
	}

	function dragOverHandler(e) {
		e.preventDefault()
		// e.target.style.background = 'lightgray';
		setShowImg(true)
	}

	const dropHandler = (e) => {
		e.preventDefault()
		setShowImg(false)
		// e.target.style.background = 'white';
	}

	return (
		<div className={styles.moveProductsWrapper}>
			<h2 className={styles.headName}>Перемещение товаров</h2>
			<div className={styles.warehousesPanel}>
				<div className={styles.warehousePanel}>
					<h2>Из
						<select onChange={(e) => setFirstSelect(e.target.value)} name="" id="">
							<option value="" selected disabled hidden>Выбрать склад</option>
							{warehouses.map(el => (
								<option value={el.name}>{el.name}</option>
							))}
						</select>
					</h2>
					{firstSelect && <div className={styles.productRowScroll}>
						{warehouses.filter(el => el.name === firstSelect)[0]?.products.map(product => (
							<div
								draggable={true}
								onDragStart={(e) => dragStartHandler(e)}
								onDragLeave={(e) => dragEndHandler(e)}
								onDragEnd={(e) => dragEndHandler(e)}
								onDragOver={(e) => dragOverHandler(e)}
								onDrop={(e) => dropHandler(e)}
								className={styles.productRow}
							>
								<p className={styles.warehouseName}>
									{product.name}
								</p>
								<div className={styles.tableBtns}>
									<p>
										<span>-</span>
										{product.count} шт.
										<span>+</span>
									</p>
									<Button name='Удалить' type='simple'/>
								</div>
							</div>
						))}
					</div>}
				</div>
				{showImg && <div className={styles.arrowPanel}>
					<img src={arrowRight} alt=""/>
				</div>}
				<div
					className={styles.warehousePanel}
					draggable={true}
					onDragStart={(e) => dragStartHandler(e)}
					onDragLeave={(e) => dragEndHandler(e)}
					onDragEnd={(e) => dragEndHandler(e)}
					onDragOver={(e) => dragOverHandler(e)}
					onDrop={(e) => dropHandler(e)}
				>
					<h2>В
						<select onChange={(e) => setSecondSelect(e.target.value)} name="" id="">
							<option value="" selected disabled hidden>Выбрать склад</option>
							{warehouses.map(el => (
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
											<span>-</span>
											{product.count} шт.
											<span>+</span>
										</p>
										<Button name='Удалить' type='simple'/>
									</div>
								</div>}
							</>
						))}
					</div>}
				</div>
			</div>
		</div>
	)
}

export default MoveProducts;