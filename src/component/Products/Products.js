import React from "react";
import styles from './styles.module.scss';
import {useSelector} from "react-redux";
import {getProducts} from "../../store/core/selector";

const Products = () => {
	const products = useSelector(getProducts);

	return (
		<div className={styles.productsPage}>

			{products.map(({id, name, warehouse, count}) => (
				<div className={styles.rowProduct}>
					<p>{id}</p>
					<p>{name}</p>
					<p>{warehouse}</p>
					<p>{count}</p>
				</div>
			))}
		</div>
	)
}

export default Products;