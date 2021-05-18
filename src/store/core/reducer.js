import {
	ADD_PROD,
	ADD_WAREHOUSES,
	CHANGE_PROD,
	CHANGE_WAREHOUSES,
	REMOVE_PROD,
	REMOVE_PROD_FROM_WARE,
	REMOVE_WAREHOUSES,
	WAREHOUSE_FROM_GENERAL,
	WAREHOUSES_FROM_GENERAL,
	REMOVE_ALL_PROD_FROM_WARE,
	ADD_PROD_IN_WAREHOUSE,
	MOVE_PROD_IN_WARE,
	MOVE_PROD_FROM_WARE,
	SET_BLACK_THEME,
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
	],
	blackTheme: false,
};

const core = (state = INITIAL_STATE, {type, payload}) => {
	switch (type) {
		// PRODUCTS
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
		// WAREHOUSES
		case ADD_WAREHOUSES:
			return ({...state, warehouses: [...state.warehouses, payload]})
		case CHANGE_WAREHOUSES:
			return ({
				...state, warehouses: state.warehouses.map(el => {
					if (el.id === payload.id) {
						return ({...el, name: payload.name})
					}
					return el
				})
			})
		case REMOVE_WAREHOUSES:
			return ({...state, warehouses: state.warehouses.filter(el => el.id !== payload)})
		case WAREHOUSES_FROM_GENERAL:
			let isSimilarWares = state.products.filter(el => el.name === payload.prodName).length > 0

			if (isSimilarWares) {
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
					products: [...state.products, {name: payload.prodName, count: payload.prodCount}]
				})
			}
		// WAREHOUSE
		case REMOVE_ALL_PROD_FROM_WARE:
			return ({
				...state, warehouses: state.warehouses.map(el => {
					if (el.name === payload.warehouseName) {
						return {...el, products: el.products.filter(prod => prod.name !== payload.prodName)}
					}
					return el
				})
			})
		case WAREHOUSE_FROM_GENERAL:
			let isSimilarWare = state.products.filter(el => el.name === payload.prodName).length > 0

			if (isSimilarWare) {
				return ({
					...state, products: state.products.map(el => {
						if (el.name === payload.prodName) {
							if (payload.sign === 'remove') {
								return ({
									...el,
									count: +el.count + +payload.prodCount,
								})
							} else if (payload.sign === 'add') {
								return ({
									...el,
									count: +el.count - +payload.prodCount,
								})
							}
						}
						return el
					})
				})
			} else {
				return ({
					...state,
					products: [...state.products, {name: payload.prodName, count: payload.prodCount}]
				})
			}
		case ADD_PROD_IN_WAREHOUSE:
			let isSimilarWareAdd = state.warehouses.filter(ware => ware.name === payload.warehouseName)[0].products.filter(pr => pr?.name === payload.prodName).length > 0

			if (isSimilarWareAdd) {
				return ({
					...state, warehouses: state.warehouses.map(el => {
						if (el.name === payload.warehouseName) {
							return ({
								...el,
								products: el.products.map(prod => {
									if (prod.name === payload.prodName) {
										return ({
											...prod,
											count: +prod.count + +payload.prodCount,
										})
									}
									return prod
								})
							})
						}
						return el
					})
				})
			} else {
				return ({
					...state, warehouses: state.warehouses.map(el => {
						if (el.name === payload.warehouseName) {
							return ({
								...el,
								products: [...el.products, {name: payload.prodName, count: payload.prodCount}]
							})
						}
						return el
					})
				})
			}
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

		// MOVE
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

		//BLACK THEME
		case SET_BLACK_THEME:
			return ({...state, blackTheme: payload})

		default:
			return {
				...state,
			};
	}
};

export default core;