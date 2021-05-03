import React from "react";
import {Link} from "react-router-dom";

import styles from './styles.module.scss';
import warehouse from '../../../assets/img/warehouse.png';

const Sidebar = () => {
	return (
		<div className={styles.sidebarWrapper}>
			<p>
				<img src={warehouse} alt="img"/>
				<Link to='warehouses'>Склад</Link>
			</p>
			<p>
				<img src={warehouse} alt="img"/>
				<Link to='products'>Продукты</Link>
			</p>
		</div>
	)
}

export default Sidebar;