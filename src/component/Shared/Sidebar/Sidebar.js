import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

import {getTheme} from "../../../store/core/selector";

import sidebarWarehouse from '../../../assets/img/sidebarWarehouse.svg';
import sidebarProduct from '../../../assets/img/sidebarProduct.svg';
import sidebarWarehousesActive from '../../../assets/img/sidebarWarehousesActive.svg';
import sidebarProductActive from '../../../assets/img/sidebarProductActive.svg';
import styles from './styles.module.scss';


const links = [
	{src: sidebarWarehouse, activeSrc: sidebarWarehousesActive, to: '/warehouses/', text: 'Склады'},
	{src: sidebarProduct, activeSrc: sidebarProductActive, to: '/products/', text: 'Продукты'},
]

const Sidebar = () => {
	const [active, setActive] = useState('');
	const onBlackTheme = useSelector(getTheme);

	return (
		<div className={onBlackTheme ? `${styles.sidebarWrapper} ${styles.sidebarWrapperBlack}` : `${styles.sidebarWrapper}`}>
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