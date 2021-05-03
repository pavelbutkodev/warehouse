import React, {useRef, useState} from "react";

import styles from './styles.module.scss';
import {useDispatch} from "react-redux";
import {addProd} from "../../../store/core/actions";

const Modal = ({onClose, currentProd}) => {
	const inputEl = useRef(null);
	const [form, setForm] = useState(null)
	const dispatch = useDispatch();

	const handleDispatch = () => {
		dispatch(addProd({form, currentProd}))
	}

	const handleInput = (e) => {
		const value = e.target.value;
		setForm(+value)
	}

	const handleClick = (e) => {
		if (e.target === inputEl.current) {
			onClose(false)
		}
	}

	return (
		<div ref={inputEl} className={styles.modalWrapper} onClick={handleClick}>
			<div>
				Сколько?
				<input value={form} onChange={handleInput} type="text"/>
				<button onClick={handleDispatch}>Отправить</button>
			</div>
		</div>
	)
}

export default Modal;