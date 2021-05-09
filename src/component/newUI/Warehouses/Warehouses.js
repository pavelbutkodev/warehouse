import React, {useState} from "react";
import {useSelector} from "react-redux";

import {getWarehouse} from "../../../store/core/selector";
import ModalWarehouse from "../ModalWarehouse";
import Button from "../Button";

import styles from './styles.module.scss';
import {NavLink} from "react-router-dom";


const Warehouses = () => {
	const [openModalAdd, setOpenModalAdd] = useState(false);
	const [openModalChange, setOpenModalChange] = useState({status: false, id: null});
	const [openModalRemove, setOpenModalRemove] = useState({status: false, id: null});
	const warehouses = useSelector(getWarehouse);

	const handleAddWarehouse = () => {
		setOpenModalAdd(!openModalAdd);
	}

	const handleChangeWarehouse = (id) => {
		setOpenModalChange({
			status: !openModalChange.status,
			id: id,
		});
	}

	const closeChangeWarehouse = () => {
		setOpenModalChange({
			id: openModalChange.id,
			status: !openModalChange.status,
		});
	}

	const handleRemoveWarehouse = (id) => {
		setOpenModalRemove({
			id: id,
			status: !openModalRemove.status,
		});
	}

	const closeRemoveWarehouse = () => {
		setOpenModalRemove({
			id: openModalRemove.id,
			status: !openModalRemove.status,
		});
	}


	return (
		<div className={styles.warehousesWrapper}>
			<div className={styles.warehousesInfoPanel}>
				<h2>Мои склады</h2>
				<Button
					onClick={handleAddWarehouse}
					name='Добавить склад'
					type='add'/>
			</div>
			<div>
				{warehouses.map(warehouse => (
					<div className={styles.productRow}>
						<p className={styles.warehouseName}>
							<NavLink to={`/warehouse/${warehouse.id}/`}>{warehouse.name}</NavLink>
						</p>
						<div className={styles.tableBtns}>
							<Button
								onClick={() => handleChangeWarehouse(warehouse.id)}
								name='Редактировать'
								type='simple'
							/>
							<Button
								onClick={() => handleRemoveWarehouse(warehouse.id)}
								name='Удалить'
								type='simple'
							/>
						</div>
					</div>
				))}
			</div>
			{openModalAdd && <ModalWarehouse type='add' text='Добавить склад' onClose={setOpenModalAdd}/>}
			{openModalChange.status &&
			<ModalWarehouse
				id={openModalChange.id}
				type='change'
				text='Изменить склад'
				onClose={closeChangeWarehouse}
			/>}
			{openModalRemove.status &&
			<ModalWarehouse
				id={openModalRemove.id}
				type='remove'
				text='Удалить склад'
				onClose={closeRemoveWarehouse}
			/>}
		</div>
	)
}

export default Warehouses;