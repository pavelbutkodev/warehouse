import React, {useState} from "react";
import {useSelector} from "react-redux";

import {getProducts} from "../../../store/core/selector";
import Button from "../Button";
import ModalProduct from "../ModalProduct";

import styles from './styles.module.scss';

const Products = () => {
	const [openModalAdd, setOpenModalAdd] = useState(false);
	const [openModalRemove, setOpenModalRemove] = useState({status: false, id: null});
	const products = useSelector(getProducts);

	const handleAddWarehouse = () => {
		setOpenModalAdd(!openModalAdd);
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
		<div className={styles.productsWrapper}>
			<div className={styles.productsInfoPanel}>
				<h2>Продукты</h2>
				<Button
					onClick={handleAddWarehouse}
					name='Добавить товар'
					type='add'
				/>
			</div>
			<div>
				{products.map(product => (
					<div className={styles.productRow}>
						<p className={styles.warehouseName}>
							{product.name}
						</p>
						<div className={styles.tableBtns}>
							<p>
								{product.count} шт.
							</p>
							<Button
								onClick={() => handleRemoveWarehouse(product.id)}
								name='Удалить'
								type='simple'
							/>
						</div>
					</div>
				))}
			</div>
			{openModalAdd && <ModalProduct type='add' text='Добавить товар' onClose={setOpenModalAdd}/>}
			{openModalRemove.status &&
			<ModalProduct
				id={openModalRemove.id}
				type='remove'
				text='Удалить товар'
				onClose={closeRemoveWarehouse}
			/>}
		</div>
	)
}

export default Products;