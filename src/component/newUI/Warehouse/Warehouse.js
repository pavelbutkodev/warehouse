import React from "react";

import Button from "../Button";

import styles from './styles.module.scss';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {getWarehouse} from "../../../store/core/selector";

const Warehouse = () => {
	const {id} = useParams()
	const warehouse = useSelector(getWarehouse).filter(el => el.id === +id)[0]

	return (
		<div className={styles.warehouseWrapper}>
			<div className={styles.productsInfoPanel}>
				<h2>{warehouse.name}</h2>
				<div className={styles.btnPanel}>
					<Button name='Переместить товары' type='move'/>
					<Button name='Добавить товар' type='add'/>
				</div>
			</div>
			<div>
				{warehouse.products.length > 0
					? warehouse.products.map(({name, count}) =>
						<div className={styles.productRow}>
							<p className={styles.warehouseName}>
								{name}
							</p>
							<div className={styles.tableBtns}>
								<p>
									{count} шт.
								</p>
								<Button name='Удалить' type='simple'/>
							</div>
						</div>)
					: <div className={styles.listEmpty}>Список пуст ...</div>}
			</div>
		</div>
	)
}

export default Warehouse;