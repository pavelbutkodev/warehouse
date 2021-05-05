import React from "react";

import styles from './styles.module.scss';

const ChoiceWare = (
	{
		id,
		name,
		count,
		img,
		arrowSet,
	}) => {
	return (
		<div className={styles.infoWrapper}>
			<img
				className={styles.arrowRight}
				src={''}
				alt="arrowRight"
				onClick={() => {
					id ? arrowSet('+', 'products') : arrowSet('+', 'warehouses')
				}}
			/>
			<img
				className={styles.arrowLeft}
				src={''}
				alt="arrowLeft"
				onClick={() => {
					id ? arrowSet('-', 'products') : arrowSet('-', 'warehouses')
				}}
			/>
			<h2>{id ? 'Продукты' : 'Склад'}: <span>{name}</span></h2>
			<div className={styles.infoContent}>
				<div className={styles.infoImg}>
					<img src={img} alt="img"/>
				</div>
				<div>
					<p>{id ? 'Количество продукта' : 'Продуктов на складе'}: <span>{count}</span></p>
				</div>
			</div>
		</div>
	)
}

export default ChoiceWare;