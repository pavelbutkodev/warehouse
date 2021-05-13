import React, {useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {useSelector} from "react-redux";

import {getWarehouse} from "../../../store/core/selector";
import Button from "../Button";
import ModalWarehouse from "../ModalWarehouse";

import styles from './styles.module.scss';


const Warehouse = () => {
	const {id} = useParams()
	const warehouse = useSelector(getWarehouse).filter(el => el.id === +id)[0]
	const [openModalAdd, setOpenModalAdd] = useState(false);
	const [openModalRemove, setOpenModalRemove] = useState({status: false, count: null, name: ''});
	const history = useHistory()

	const handleAddProduct = () => {
		setOpenModalAdd(!openModalAdd);
	}

	const handleRemoveWarehouse = (count, name) => {
		setOpenModalRemove({
			count: count,
			name: name,
			status: !openModalRemove.status,
		});
	}

	const closeRemoveWarehouse = () => {
		setOpenModalRemove({
			count: openModalRemove.count,
			name: openModalRemove.name,
			status: !openModalRemove.status,
		});
	}

	return (
		<>
			{warehouse
				?
				<div className={styles.warehouseWrapper}>
					<div className={styles.productsInfoPanel}>
						<h2>{warehouse.name}</h2>
						<div className={styles.btnPanel}>
								<Button
									name='Переместить товары'
									type='move'
									onClick={() => history.push(`/move/${id}`)}
								/>
							<Button
								onClick={handleAddProduct}
								name='Добавить товар'
								type='add'
							/>
						</div>
					</div>
					<div>
						{warehouse?.products.length > 0
							? warehouse.products.map(({name, count}) =>
								<div className={styles.productRow}>
									<p className={styles.warehouseName}>
										{name}
									</p>
									<div className={styles.tableBtns}>
										<p>
											{count} шт.
										</p>
										<Button
											onClick={() => handleRemoveWarehouse(count, name)}
											name='Удалить'
											type='simple'
										/>
									</div>
								</div>)
							: <div className={styles.listEmpty}>Список пуст ...</div>}
					</div>
					{openModalAdd && <ModalWarehouse
						warehouseName={warehouse.name}
						type='add'
						text='Добавить продукты'
						onClose={setOpenModalAdd}
					/>}
					{openModalRemove.status &&
					<ModalWarehouse
						prodCount={openModalRemove.count}
						prodName={openModalRemove.name}
						warehouseName={warehouse.name}
						type='remove'
						text='Удалить товар'
						onClose={closeRemoveWarehouse}
					/>}
				</div>
				:
				<div className={styles.warehouseWrapper}>
					<div className={styles.productsInfoPanel}>
						<h2>Такого склада не существует</h2>
					</div>
				</div>}
		</>
	)
}

export default Warehouse;