import React from "react";
import styles from './styles.module.scss';
import {useSelector} from "react-redux";
import {getUnallocatedProducts} from "../../../store/core/selector";

const Products = () => {
	const unallocatedProducts = useSelector(getUnallocatedProducts);

	return (
		<div className={styles.productsPage}>
			<div className={styles.mainRow}>
				<p className={styles.id}>id</p>
				<p className={styles.name}>name</p>
				<p className={styles.warehouse}>warehouse</p>
				<p className={styles.count}>count</p>
			</div>
			{unallocatedProducts.map(({id, name, warehouse, count}) => (
				<div className={styles.rowProduct}>
					<div className={styles.productInfo}>
						<p className={styles.id}>{id}</p>
						<p className={styles.name}>{name}</p>
						<p className={styles.warehouse}>{warehouse}</p>
						<p className={styles.count}>{count}</p>
					</div>
					<div className={styles.btnPanel}>
						<button>Изменить</button>
						<button>Удалить</button>
					</div>
				</div>
			))}
		</div>
	)
}

export default Products;