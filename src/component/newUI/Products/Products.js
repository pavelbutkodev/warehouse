import React from "react";

import styles from './styles.module.scss';

const Products = () => {
	const products = [
		{name: 'Молоко', count: 2},
		{name: 'Молоко', count: 2},
		{name: 'Молоко', count: 2},
		{name: 'Молоко', count: 2},
	]

	return (
		<div className={styles.productsWrapper}>
			<div>
				<h2>Продукты</h2>
				<button>
					Добавить товар
					<span>+</span>
				</button>
			</div>
			<div>
				{products.map(product => (
					<div>
						<p className={styles.productName}>{product.name}</p>
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

export default Products;