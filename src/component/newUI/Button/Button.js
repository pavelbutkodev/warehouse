import React from "react";

import styles from './styles.module.scss';

const Button = ({name, type, onClick}) => {
	const handleClick = () => {
		onClick()
	}

	if (type === 'add') {
		return (
			<button onClick={handleClick} className={styles.buttonAdd}>
				{name}
				<span>+</span>
			</button>
		)
	} else if (type === 'simple') {
		return (
			<button onClick={handleClick} className={styles.buttonSimple}>
				{name}
			</button>
		)
	} else if (type === 'move') {
		return (
			<button onClick={handleClick} className={styles.buttonMove}>
				{name}
			</button>
		)
	} else {
		return <button>{name}</button>
	}
}

export default Button;