import React from "react";
import styles from './styles.module.scss';
import {Link} from "react-router-dom";

const Nav = () => {
	return (
		<div className={styles.navWrapper}>
			<Link to='main'>Warehouse</Link>
		</div>
	)
}

export default Nav;