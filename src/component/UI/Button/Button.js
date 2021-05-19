import React from 'react';

import styles from './styles.module.scss';


const Button = ({name, type, onClick}) => {
	const handleClick = () => {
		onClick();
	};

	if (type === 'add') {
		return (
			<button
				onClick={handleClick}
				className={styles.buttonAdd}
				type="button"
			>
				{name}
				<span>+</span>
			</button>
		);
	}
	if (type === 'simple') {
		return (
			<button
				onClick={handleClick}
				className={styles.buttonSimple}
				type="button"
			>
				{name}
			</button>
		);
	}
	if (type === 'move') {
		return (
			<button
				onClick={handleClick}
				className={styles.buttonMove}
				type="button"
			>
				{name}
			</button>
		);
	}
	return <button type="button">{name}</button>;
};

export default Button;
