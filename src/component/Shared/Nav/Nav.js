import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {getTheme} from "../../../store/core/selector";
import {setBlackTheme} from "../../../store/core/actions";

import 'react-toastify/dist/ReactToastify.css';
import styles from './styles.module.scss';
import blackTheme from '../../../assets/img/darkTheme.png';


const Nav = () => {
	const dispatch = useDispatch();
	const onBlackTheme = useSelector(getTheme);
	const handleChangeTheme = () => {
		dispatch(setBlackTheme(!onBlackTheme))
	}

	return (
		<div className={onBlackTheme ? `${styles.navWrapper} ${styles.navWrapperBlack}` : `${styles.navWrapper}`}>
			<Link to='/warehouses/'>
				мой
				<span>склад</span>
			</Link>
			<img className={onBlackTheme ? `${styles.blackThemeOn}` : `${styles.blackThemeOff}`} onClick={handleChangeTheme} src={blackTheme} alt=""/>
		</div>
	)
}

export default Nav;