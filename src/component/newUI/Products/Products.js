import React, {useState} from "react";
import {useSelector} from "react-redux";
import {getProducts} from "../../../store/core/selector";

import Button from "../Button";
import ModalProduct from "../ModalProduct";

import styles from './styles.module.scss';


const Products = () => {
	const [openModalAdd, setOpenModalAdd] = useState(false);
	const [openModalRemove, setOpenModalRemove] = useState({status: false, count: null, name: ''});
	const products = useSelector(getProducts);
	const totalScores = products.reduce((previousScore, currentScore) => previousScore + currentScore.count, 0)

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
		<div className={styles.productsWrapper}>
			<div className={styles.productsInfoPanel}>
				<h2>Продукты</h2>
				<Button
					onClick={handleAddProduct}
					name='Добавить товар'
					type='add'
				/>
			</div>
			<div className={styles.productRowScroll}>
				{totalScores > 0
					? products.map(product => (
						product.count
							? <div className={styles.productRow}>
								<p className={styles.warehouseName}>
									{product.name}
								</p>
								<div className={styles.tableBtns}>
									<p>
										{product.count} шт.
									</p>
									<Button
										onClick={() => handleRemoveWarehouse(product.count, product.name)}
										name='Удалить'
										type='simple'
									/>
								</div>
							</div>
							: null))
					: <p className={styles.rowEmpty}>Список пуст...</p>}
			</div>
			{openModalAdd && <ModalProduct type='add' text='Добавить товар' onClose={setOpenModalAdd}/>}
			{openModalRemove.status &&
			<ModalProduct
				count={openModalRemove.count}
				name={openModalRemove.name}
				type='remove'
				text='Удалить товар'
				onClose={closeRemoveWarehouse}
			/>}
		</div>
	)
}

export default Products;