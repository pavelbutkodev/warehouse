import React from "react";

import Sidebar from "../Sidebar";
import Content from "../Content";

import styles from './styles.module.scss';

const Main = () => {
	return (
		<div className={styles.content}>
			<Sidebar/>
			<Content/>
		</div>
	)
}

export default Main;