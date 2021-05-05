import React from "react";

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
			<div>
				<h2>Склад...</h2>
				<button>Переместить товары</button>
				<button>
					Добавить склад
					<span>+</span>
				</button>
			</div>
			<div>
				{productsThisWarehouse.map(product => (
					<div>
						<p className={styles.productName}>
							{product.name}
						</p>
						<p className={styles.productCount}>
							<button>-</button>
							{product.count}
							<button>+</button>
						</p>
						<button>Удалить</button>
					</div>
				))}
			</div>
		</div>
	)
}

export default Warehouse;