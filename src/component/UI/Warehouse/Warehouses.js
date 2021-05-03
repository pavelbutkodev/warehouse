import React, {useState} from "react";
import styles from './styles.module.scss';
import {useSelector} from "react-redux";
import {getUnallocatedProducts, getWorkWarehouses} from "../../../store/core/selector";
import arrowRight from "../../../assets/img/arrowRight.svg";
import arrowLeft from "../../../assets/img/arrowLeft.svg";

const Warehouses = () => {
	const [warehouseCount, setWarehouseCount] = useState(0);
	const warehouses = useSelector(getWorkWarehouses);
	const unallocatedProducts = useSelector(getUnallocatedProducts);

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

	return (
		<div className={styles.warehousesPage}>
			<div className={styles.wareInfo}>
				<div className={styles.thisProd}>
					<p>Продукты:</p>
					{warehouses[warehouseCount].products.map(({name, count}) => (
							<p className={styles.prodName}>{name}, {count}</p>
					))}
				</div>
				<div className={styles.thisWare}>
						<p>Название склада:</p>
						<div className={styles.wareName}>
							{warehouses[warehouseCount].name}
						</div>
					<img
						className={styles.arrowRight}
						src={arrowRight}
						alt="arrowRight"
						onClick={() => {
							arrowSet('+')
						}}
					/>
					<img
						className={styles.arrowLeft}
						src={arrowLeft}
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
					{unallocatedProducts.map(({id, name, warehouse, count}) => (
						<div draggable={true} className={styles.productInfo}>
							<p>{name}, {count}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Warehouses;