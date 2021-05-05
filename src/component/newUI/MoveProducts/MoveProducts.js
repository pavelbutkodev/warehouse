import React from "react";

import styles from './styles.module.scss';

const MoveProducts = () => {
	const products = [
		{name: 'Молоко', count: 2},
		{name: 'Молоко', count: 2},
		{name: 'Молоко', count: 2},
		{name: 'Молоко', count: 2},
	]

	return (
		<div className={styles.moveProductsWrapper}>
			<div>
				<h2>Перемещение товаров</h2>
			</div>
			<div>
				<div>
					<h3>Из склад...</h3>
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
				<div>
					<h3>В склад...</h3>
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
		</div>
	)
}

export default MoveProducts;