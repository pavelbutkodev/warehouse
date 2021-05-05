import React, {useState} from "react";
import styles from './styles.module.scss';
import {useSelector} from "react-redux";
import {getUnallocatedProducts, getWorkWarehouses} from "../../../store/core/selector";
import Modal from "../Modal";

const Warehouses = () => {
	const [warehouseCount, setWarehouseCount] = useState(0);
	const warehouses = useSelector(getWorkWarehouses);
	const unallocatedProducts = useSelector(getUnallocatedProducts);
	const [currentProd, setCurrentProd] = useState(null);
	const [onModal, setOnModal] = useState(false);

	const arrowSet = (symbol) => {
		if (symbol === '+') {
			if (warehouseCount === warehouses.length - 1) {
				setWarehouseCount(0)
			} else {
				setWarehouseCount(warehouseCount + 1)
			}
		} else if (symbol === '-') {
			if (warehouseCount === 0) {
				setWarehouseCount(warehouses.length - 1)
			} else {
				setWarehouseCount(warehouseCount - 1)
			}
		}
	}

	const dragStartHandler = (e, item) => {
		setCurrentProd(item)
	}

	const dragEndHandler = (e) => {
		e.target.style.background = 'white';
	}

	function dragOverHandler(e) {
		e.preventDefault()
		e.target.style.background = 'lightgray';
	}

	const dropHandler = (e, item) => {
		e.preventDefault()
		e.target.style.background = 'white';
		if (item === warehouses[warehouseCount] && currentProd !== item) {
			setOnModal(true)
		}
	}

	return (
		<div className={styles.warehousesPage}>
			<div className={styles.wareInfo}>
				<div
					draggable={true}
					onDragStart={(e) => dragStartHandler(e, warehouses[warehouseCount])}
					onDragLeave={(e) => dragEndHandler(e)}
					onDragEnd={(e) => dragEndHandler(e)}
					onDragOver={(e) => dragOverHandler(e)}
					onDrop={(e) => dropHandler(e, warehouses[warehouseCount])}
					className={styles.thisProd}>
					<p>Продукты:</p>
					{console.log('======>warehouses', warehouses[warehouseCount])}
					{warehouses[warehouseCount].products.map(({name, count}) => (
						<p className={styles.prodName}>
							{name}, {count}
						</p>
					))}
				</div>
				<div className={styles.thisWare}>
					<p>Название склада:</p>
					<div className={styles.wareName}>
						{warehouses[warehouseCount].name}
					</div>
					<img
						className={styles.arrowRight}
						src={''}
						alt="arrowRight"
						onClick={() => {
							arrowSet('+')
						}}
					/>
					<img
						className={styles.arrowLeft}
						src={''}
						alt="arrowLeft"
						onClick={() => {
							arrowSet('-')
						}}
					/>
				</div>
			</div>
			<div className={styles.unallocatedWrapper}>
				<div className={styles.unallocatedProd}>
					<p>Нераспределенные продукты:</p>
					{unallocatedProducts.map(item => (
						<div
							draggable={true}
							onDragStart={(e) => dragStartHandler(e, item)}
							onDragLeave={(e) => dragEndHandler(e)}
							onDragEnd={(e) => dragEndHandler(e)}
							onDragOver={(e) => dragOverHandler(e)}
							onDrop={(e) => dropHandler(e, item)}
							className={styles.productInfo}
						>
							{item.name}, {item.count}
						</div>
					))}
				</div>
			</div>
			{onModal && <Modal onClose={setOnModal} currentProd={currentProd}/>}
		</div>
	)
}

export default Warehouses;