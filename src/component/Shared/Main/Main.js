import React from "react";

import Sidebar from "../Sidebar";
import Content from "../../UI/Content";

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