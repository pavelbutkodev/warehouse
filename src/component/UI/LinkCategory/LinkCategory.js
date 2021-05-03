import React from "react";
import styles from './styles.module.scss';
import {Link} from "react-router-dom";

const LinkCategory = ({id, img, text, desc, path}) => {
	return (
		<div className={styles.linkCategoryWrapper}>
			<div className={id ? `${styles.imgBlue} ${styles.imgTop}` : `${styles.imgTop} ${styles.imgPink}`}>
				<img src={img} alt="img"/>
			</div>
			<Link to={path} exact>{text}</Link>
			<p>{desc}</p>
		</div>
	)
}

export default LinkCategory;