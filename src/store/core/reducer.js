import {
	ADD_PROD,
	ADD_WAREHOUSE,
	CHANGE_PROD,
	CHANGE_WAREHOUSE,
	REMOVE_PROD,
	REMOVE_PROD_FROM_WARE,
	REMOVE_WAREHOUSE,
	WAREHOUSE_FROM_GENERAL,
	WAREHOUSES_FROM_GENERAL,
	REMOVE_ALL_PROD_FROM_WARE,
	ADD_PROD_IN_WAREHOUSE,
	MOVE_PROD_IN_WARE,
	MOVE_PROD_FROM_WARE,
} from '../../constants/actionTypes';


const INITIAL_STATE = {
	warehouses: [
		{
			id: 1620762800581,
			name: 'Первый склад',
			products: [
				{name: 'Печеньки', count: 1},
				{name: 'Кофе', count: 2},
			],
		},
		{
			id: 1620762855581,
			name: 'Второй склад',
			products: [
				{name: 'Кофе', count: 3},
			],
		},
	],
	products: [
		{name: 'Какао', count: 3},
		{name: 'Печеньки', count: 1},
		{name: 'Молоко', count: 3},
	]
};

const core = (state = INITIAL_STATE, {type, payload}) => {
	switch (type) {
		case ADD_PROD:
			return {...state, products: [...state.products, payload]}
		case CHANGE_PROD:
			return ({
				...state, products: state.products.map(el => {
					if (el.name === payload.name) {
						return ({
							...el,
							count: el.count - +payload.count,
						})
					}
					return el
				})
			})
		case REMOVE_PROD:
			return ({...state, products: state.products.filter(el => el.name !== payload)})
		case WAREHOUSE_FROM_GENERAL:
			let isSimilarWare = state.products.filter(el => el.name === payload.prodName).length > 0

			if (isSimilarWare) {
				return ({
					...state, products: state.products.map(el => {
						if (el.name === payload.prodName) {
							return ({
								...el,
								count: +el.count + +payload.prodCount,
							})
						}
						return el
					})
				})
			} else {
				return ({
					...state,
					products: [...state.products, {id: state.products.length, name: payload.prodName, count: payload.prodCount}]
				})
			}
		case REMOVE_ALL_PROD_FROM_WARE:
			return ({
				...state, warehouses: state.warehouses.map(el => {
					if (el.name === payload.warehouseName) {
						return {...el, products: el.products.filter(prod => prod.name !== payload.prodName)}
					}
					return el
				})
			})
		case REMOVE_PROD_FROM_WARE:
			return ({
				...state, warehouses: state.warehouses.map((warehouse) => {
					if (warehouse.name === payload.warehouseName) {
						return ({
							...warehouse,
							products: warehouse.products.map((prod) => {
								if (prod.name === payload.prodName) {
									return ({
										...prod,
										count: prod.count - payload.prodCount,
									})
								}
								return prod
							})
						})
					}
					return warehouse
				})
			})
		case ADD_PROD_IN_WAREHOUSE:
			return ({
				...state, warehouses: state.warehouses.map(el => {
					if (el.name === payload.warehouseName) {
						return ({
							...el,
							products: [...el.products, ...payload.products]
						})
					}
					return el
				})
			})
		case ADD_WAREHOUSE:
			return ({...state, warehouses: [...state.warehouses, payload]})
		case CHANGE_WAREHOUSE:
			return ({
				...state, warehouses: state.warehouses.map(el => {
					if (el.id === payload.id) {
						return ({...el, name: payload.name})
					}
					return el
				})
			})
		case WAREHOUSES_FROM_GENERAL:
			// let isSimilarWares = false;
			// state.products.forEach(el => {
			// 	prod.forEach(prod => {
			// 		if (prod.name === el.name) {
			// 			isSimilarWares = true;
			// 		}
			// 	})
			// });

			// if (isSimilarWares) {
			// 	return ({
			// 		...state, products: state.products.map(el => {
			// 			return prod.map(prod => {
			// 				if (el.name === prod.name) {
			// 					console.log('======>el.name', el.name);
			// 					return ({
			// 						...el,
			// 						count: +el.count + +prod.count,
			// 					})
			// 				}
			// 				return el
			// 			})[0]
			// 		})
			// 	})
			// } else {
			//
			// 	return ({
			// 		...state, products: [...state.products, ...prod],
			// 	})
			// }

			const prod = state.warehouses.filter(el => el.id === payload)[0].products

			//если есть такой продукт в нераспр
			//если его нет такого продукта в нераспред
			// вернуть нераспредел

			console.log('======>prod', prod);
			console.log('======>state.products', state.products);
			let newProd = []
			state.products.forEach(product => {
				const findprod = state.products.filter(product3 => product3.name === product.name)
				if(findprod.length > 0){

				}

			})
console.log('=====>newProd', newProd);
			return ({...state, products: newProd})

		// if (prod.filter(prod => prod.name === el.name).length > 0) {
		// 	return ({
		// 		...el,
		// 		count: el.count + prod.filter(prod => prod.name === el.name)[0].count
		// 	})
		// }
		// return el
		case REMOVE_WAREHOUSE:
			return ({...state, warehouses: state.warehouses.filter(el => el.id !== payload)})
		case MOVE_PROD_IN_WARE:
			return ({
				...state, warehouses: state.warehouses.map(el => {
					if (el.name === payload.wareIn) {
						return ({
							...el,
							products: [
								...el.products, {name: payload.name, count: payload.count}
							]
						})
					}
					return el
				})
			})
		case MOVE_PROD_FROM_WARE:
			return ({
				...state, warehouses: state.warehouses.map(el => {
					if (el.id === +payload.wareFrom) {
						return ({
							...el,
							products: el.products.map(prod => {
								if (prod.name === payload.name) {
									return ({
										...prod,
										count: prod.count - payload.count,
									})
								}
							})
						})
					}
					return el
				})
			})
		default:
			return {
				...state,
			};
	}
};

export default core;