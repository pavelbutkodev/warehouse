import React, {useState} from "react";

import Info from "../Info";
import LinkCategory from "../LinkCategory";

import styles from './styles.module.scss';
import warehouse from '../../assets/img/warehouse.svg';
import product from '../../assets/img/product.svg';

import {useSelector} from "react-redux";
import {getProducts, getWarehouse} from "../../store/core/selector";

const category = [
	{
		id: 0,
		img: warehouse,
		text: 'Warehouse',
		desc: 'Go to the page with all warehouses'
	},
	{
		id: 1,
		img: product,
		text: 'Product',
		desc: 'Go to the page with all products'
	},
]

const Content = () => {
	const warehouses = useSelector(getWarehouse);
	const products = useSelector(getProducts);
	const [warehouseCount, setWarehouseCount] = useState(0);
	const [productCount, setProductCount] = useState(0);

	const arrowSet = (symbol, type) => {
		if (type === 'warehouses') {
			if (symbol === '+') {
				if (warehouseCount === warehouses.length - 1) {
					setWarehouseCount(0)
				} else {
					setWarehouseCount(warehouseCount + 1)
				}
			} else if (symbol === '-') {
				if (warehouseCount === 0) {
					setWarehouseCount(warehouses.length - 1)
				} else {
					setWarehouseCount(warehouseCount - 1)
				}
			}
		}
		if (type === 'products') {
			if (symbol === '+') {
				if (productCount === products.length - 1) {
					setProductCount(0)
				} else {
					setProductCount(productCount + 1)
				}
			} else if (symbol === '-') {
				if (productCount === 0) {
					setProductCount(products.length - 1)
				} else {
					setProductCount(productCount - 1)
				}
			}
		}
	}

	return (
		<div className={styles.mainWrapper}>
			<div className={styles.infoRow}>
				<Info
					name={warehouses[warehouseCount].name}
					count={warehouses[warehouseCount].products.length}
					arrowSet={arrowSet}
					img={warehouse}
					id={0}
				/>
				<Info
					name={products[productCount].name}
					count={products[productCount].count}
					arrowSet={arrowSet}
					img={product}
					id={1}
				/>
			</div>
			<div className={styles.linkRow}>
				{category.map(({id, img, text, desc}) => (
					<LinkCategory
						id={id}
						img={img}
						text={text}
						desc={desc}
					/>
				))}
			</div>
		</div>
	)
}

export default Content;