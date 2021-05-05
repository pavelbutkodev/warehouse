import React from "react";

import styles from './styles.module.scss';

const Warehouses = () => {
	const warehouses = [
		{name: 'Склад 1'},
		{name: 'Склад 1'},
		{name: 'Склад 1'},
		{name: 'Склад 1'},
	]

	return (
		<div className={styles.warehousesWrapper}>
			<div>
				<h2>Продукты</h2>
				<button>
					Добавить склад
					<span>+</span>
				</button>
			</div>
			<div>
				{warehouses.map(product => (
					<div>
						<p className={styles.warehouseName}>
							{product.name}
						</p>
						<button>Редактировать</button>
						<button>Удалить</button>
					</div>
				))}
			</div>
		</div>
	)
}

export default Warehouses;