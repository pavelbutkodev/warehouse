import React from "react";
import {Link} from "react-router-dom";

import styles from './styles.module.scss';
import 'react-toastify/dist/ReactToastify.css'


const Nav = () => {
	return (
		<div className={styles.navWrapper}>
			<Link to='/warehouses/'>
				мой
				<span>склад</span>
			</Link>
		</div>
	)
}

export default Nav;