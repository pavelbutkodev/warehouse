import React from "react";
import styles from './styles.module.scss';
import warehouse from '../../assets/img/warehouse.png';

const Sidebar = () => {
	return (
		<div className={styles.sidebarWrapper}>
			<p>
				<img src={warehouse} alt="img"/>
				Warehouses
			</p>
			<p>
				<img src={warehouse} alt="img"/>
				Products
			</p>
		</div>
	)
}

export default Sidebar;