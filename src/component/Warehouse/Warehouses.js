import React from "react";
import styles from './styles.module.scss';
import {useSelector} from "react-redux";
import {getWarehouse} from "../../store/core/selector";

const Warehouses = () => {
	const warehouses = useSelector(getWarehouse);

	return (
		<div className={styles.warehousesPage}>

			{warehouses.map(({id, name, products}) => (
				<div className={styles.rowWarehouse}>
					<p>{id}</p>
					<p>{name}</p>
					<p>{products.map(({id, name, warehouse, count}) => (
						<div className={styles.rowProduct}>
							<p>{id}</p>
							<p>{name}</p>
							<p>{warehouse}</p>
							<p>{count}</p>
						</div>
					))}</p>
				</div>
			))}
		</div>
	)
}

export default Warehouses;