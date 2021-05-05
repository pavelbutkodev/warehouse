import React, {useState} from "react";

import ChoiceWare from "../ChoiceWare";
import LinkCategory from "../LinkCategory";

import styles from './styles.module.scss';

import {useSelector} from "react-redux";
import {getUnallocatedProducts, getWarehouse} from "../../../store/core/selector";

const category = [
	{
		id: 0,
		img: '',
		text: 'Склад',
		desc: 'Перейти на страницу со всеми складами',
		path: '/warehouses',
	},
	{
		id: 1,
		img: '',
		text: 'Продукты',
		desc: 'Перейти на страницу со всеми продуктами',
		path: '/products',
	},
]

const Content = () => {
	const warehouses = useSelector(getWarehouse);
	const unallocatedProducts = useSelector(getUnallocatedProducts);
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
				if (productCount === unallocatedProducts.length - 1) {
					setProductCount(0)
				} else {
					setProductCount(productCount + 1)
				}
			} else if (symbol === '-') {
				if (productCount === 0) {
					setProductCount(unallocatedProducts.length - 1)
				} else {
					setProductCount(productCount - 1)
				}
			}
		}
	}

	return (
		<div className={styles.mainWrapper}>
			<div className={styles.infoRow}>
				<ChoiceWare
					name={warehouses[warehouseCount].name}
					count={warehouses[warehouseCount].products.length}
					arrowSet={arrowSet}
					img={''}
					id={0}
				/>
				<ChoiceWare
					name={unallocatedProducts[productCount].name}
					count={unallocatedProducts[productCount].count}
					arrowSet={arrowSet}
					img={''}
					id={1}
				/>
			</div>
			<div className={styles.linkRow}>
				{category.map(({id, img, text, desc, path}) => (
					<LinkCategory
						id={id}
						img={img}
						text={text}
						desc={desc}
						path={path}
					/>
				))}
			</div>
		</div>
	)
}

export default Content;