import React from "react";
import {Link} from "react-router-dom";

import styles from './styles.module.scss';
import sidebarMain from '../../../assets/img/sidebarMain.svg';
import sidebarWarehouse from '../../../assets/img/sidebarWarehouse.svg';
import sidebarProduct from '../../../assets/img/sidebarProduct.svg';

const Sidebar = () => {
	return (
		<div className={styles.sidebarWrapper}>
			<ul>
				<li>
					<img src={sidebarMain} alt="img"/>
					<Link to='/main/'>Главная</Link>
				</li>
				<li>
					<img src={sidebarWarehouse} alt="img"/>
					<Link to='/warehouses/'>Склады</Link>
				</li>
				<li>
					<img src={sidebarProduct} alt="img"/>
					<Link to='/products/'>Продукты</Link>
				</li>
			</ul>
		</div>
	)
}

export default Sidebar;