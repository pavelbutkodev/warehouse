import React from "react";
import styles from './styles.module.scss';
import warehouse from '../../assets/img/warehouse.png';
import {Link} from "react-router-dom";

const Sidebar = () => {
	return (
		<div className={styles.sidebarWrapper}>
			<p>
				<img src={warehouse} alt="img"/>
				<Link to='warehouses'>Warehouses</Link>
			</p>
			<p>
				<img src={warehouse} alt="img"/>
				<Link to='products'>Products</Link>
			</p>
		</div>
	)
}

export default Sidebar;