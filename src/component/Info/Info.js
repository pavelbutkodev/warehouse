import React from "react";
import styles from './styles.module.scss';
import arrowRight from '../../assets/img/arrowRight.svg';
import arrowLeft from '../../assets/img/arrowLeft.svg';

const Info = (
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
				src={arrowRight}
				alt="arrowRight"
				onClick={() => {
					id ? arrowSet('+', 'products') : arrowSet('+', 'warehouses')
				}}
			/>
			<img
				className={styles.arrowLeft}
				src={arrowLeft}
				alt="arrowLeft"
				onClick={() => {
					id ? arrowSet('-', 'products') : arrowSet('-', 'warehouses')
				}}
			/>
			<h2>Name {id ? 'product' : 'warehouse'}: <span>{name}</span></h2>
			<div className={styles.infoContent}>
				<div className={id ? `${styles.imgBlue} ${styles.infoImg}` : `${styles.infoImg} ${styles.imgPink}`}>
					<img src={img} alt="img"/>
				</div>
				<div>
					<p>{id ? 'Product quantity' : 'Number of products'}: <span>{count}</span></p>
				</div>
			</div>
		</div>
	)
}

export default Info;