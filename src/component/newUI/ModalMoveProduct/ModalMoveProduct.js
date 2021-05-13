import React, {useRef} from "react";

import styles from './styles.module.scss';


const ModalMoveProduct = ({onClose}) => {

	const inputEl = useRef(null);

	const handleCloseModal = (e) => {
		if (e.target === inputEl.current) {
			onClose()
		}
	}

	return (
		<div ref={inputEl} onClick={handleCloseModal} className={styles.modalWrapper}>
			<div className={styles.modalWrapperInside}>
				123
			</div>
		</div>
	)
}

export default ModalMoveProduct;