import React from "react";

import Button from "../Button";

import styles from './styles.module.scss';

const Warehouse = () => {
	const productsThisWarehouse = [
		{name: 'Молоко', count: 1},
		{name: 'Молоко', count: 1},
		{name: 'Молоко', count: 1},
		{name: 'Молоко', count: 1},
	]

	return (
		<div className={styles.warehouseWrapper}>
			<div className={styles.productsInfoPanel}>
				<h2>Склад...</h2>
				<div className={styles.btnPanel}>
					<Button name='Переместить товары' type='move'/>
					<Button name='Добавить товар' type='add'/>
				</div>
			</div>
			<div>
				{productsThisWarehouse.map(product => (
					<div className={styles.productRow}>
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
			</div>
		</div>
	)
}

export default Warehouse;