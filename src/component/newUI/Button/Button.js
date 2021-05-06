import React from "react";

import styles from './styles.module.scss';

const Button = ({name, type}) => {
	if (type === 'add') {
		return (
			<button className={styles.buttonAdd}>
				{name}
				<span>+</span>
			</button>
		)
	} else if (type === 'simple') {
		return (
			<button className={styles.buttonSimple}>
				{name}
			</button>
		)
	}
}

export default Button;