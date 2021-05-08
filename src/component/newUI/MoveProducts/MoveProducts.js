import React from "react";

import Button from "../Button";

import styles from './styles.module.scss';

const MoveProducts = () => {
	const products = [
		{name: 'Молоко', count: 2},
		{name: 'Молоко', count: 2},
		{name: 'Молоко', count: 2},
		{name: 'Молоко', count: 2},
		{name: 'Молоко', count: 2},
	]

	return (
		<div className={styles.moveProductsWrapper}>
			<h2 className={styles.headName}>Перемещение товаров</h2>
			<div className={styles.warehousesPanel}>
				<div className={styles.warehousePanel}>
					<h2>Из склад №1</h2>
					<div className={styles.productRowScroll}>
						{products.map(product => (
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
				<div className={styles.warehousePanel}>
					<h2>В склад №2</h2>
					<div className={styles.productRowScroll}>
						{products.map(product => (
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
			</div>
		</div>
	)
}

export default MoveProducts;