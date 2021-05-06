import React from "react";

import styles from './styles.module.scss';
import Button from "../Button";

const Warehouses = () => {
	const warehouses = [
		{name: 'Склад 1'},
		{name: 'Склад 1'},
		{name: 'Склад 1'},
		{name: 'Склад 1'},
	]

	return (
		<div className={styles.warehousesWrapper}>
			<div className={styles.warehousesInfoPanel}>
				<h2>Мои склады</h2>
				<Button name='Добавить склад' type='add'/>
			</div>
			<div>
				{warehouses.map(product => (
					<div className={styles.productRow}>
						<p className={styles.warehouseName}>
							{product.name}
						</p>
						<div className={styles.tableBtns}>
							<Button name='Редактировать' type='simple'/>
							<Button name='Удалить' type='simple'/>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Warehouses;