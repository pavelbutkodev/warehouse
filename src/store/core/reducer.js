import {
	ADD_PROD,
	CHANGE_PROD,
	REMOVE_PROD,
	ADD_WAREHOUSE,
	CHANGE_WAREHOUSE,
	REMOVE_WAREHOUSE,
} from '../../constants/actionTypes';


const INITIAL_STATE = {
	warehouses: [
		{
			id: 0,
			name: 'Склад 1',
			products: [],
		},
		{
			id: 1,
			name: 'Первый склад',
			products: [],
		},
		{
			id: 2,
			name: 'Второй склад',
			products: [
				{id: 0, name: 'Молоко', count: 3},
			],
		},
	],
	products: [
		{id: 0, name: 'Молоко', count: 3},
		{id: 1, name: 'Кофе', count: 2},
	]
};

const core = (state = INITIAL_STATE, {type, payload}) => {
	switch (type) {
		case ADD_PROD:
			return {...state, products: [...state.products, payload]}
		case CHANGE_PROD:
			return {...state}
		case REMOVE_PROD:
			return ({...state, products: state.products.filter(el => el.id !== payload)})
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
		case REMOVE_WAREHOUSE:
			return ({...state, warehouses: state.warehouses.filter(el => el.id !== payload)})
		default:
			return {
				...state,
			};
	}
};

export default core;

// const {form, currentProd} = payload;
// return {
// 	...state,
// 	warehouses: state.warehouses.map((el) => {
// 		if (el.id === 1) {
// 			return ({
// 				...el,
// 				products: [
// 					...el.products,
// 					{
// 						id: el.products.length,
// 						name: currentProd.name,
// 						warehouse: el.name,
// 						count: form,
// 					}]
// 			})
// 		}
// 		return el
// 	})
// };