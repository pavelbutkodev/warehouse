import React from "react";
import styles from './styles.module.scss';

const LinkCategory = ({id, img, text, desc}) => {
	return (
		<div className={styles.linkCategoryWrapper}>
			<div className={id ? `${styles.imgBlue} ${styles.imgTop}` : `${styles.imgTop} ${styles.imgPink}`}>
				<img src={img} alt="img"/>
			</div>
			<h2>{text}</h2>
			<p>{desc}</p>
		</div>
	)
}

export default LinkCategory;