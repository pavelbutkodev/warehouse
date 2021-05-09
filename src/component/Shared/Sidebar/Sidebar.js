import React, {useState} from "react";
import {NavLink} from "react-router-dom";

import styles from './styles.module.scss';
import sidebarMain from '../../../assets/img/sidebarMain.svg';
import sidebarWarehouse from '../../../assets/img/sidebarWarehouse.svg';
import sidebarProduct from '../../../assets/img/sidebarProduct.svg';
import sidebarWarehousesActive from '../../../assets/img/sidebarWarehousesActive.svg';
import sidebarProductActive from '../../../assets/img/sidebarProductActive.svg';
import sidebarMainActive from '../../../assets/img/sidebarMainActive.svg';

const links = [
	{src: sidebarMain, activeSrc: sidebarMainActive, to: '/main/', text: 'Главная'},
	{src: sidebarWarehouse, activeSrc: sidebarWarehousesActive, to: '/warehouses/', text: 'Склады'},
	{src: sidebarProduct, activeSrc: sidebarProductActive, to: '/products/', text: 'Продукты'},
	{src: sidebarProduct, activeSrc: sidebarProductActive, to: '/move/', text: 'Переместить'},
]

const Sidebar = () => {
	const [active, setActive] = useState('')

	return (
		<div className={styles.sidebarWrapper}>
			<ul>
				{links.map(({src, to, text, activeSrc}) => (
					<li>
						<NavLink onClick={() => setActive(text)} activeClassName={styles.activeNav} to={to}>
							<img src={active === text ? activeSrc : src} alt="img"/>
							{text}
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Sidebar;