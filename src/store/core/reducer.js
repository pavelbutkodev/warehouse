import {
	ADD_PROD,
} from '../../constants/actionTypes';


const INITIAL_STATE = {
	warehouses: [
		{
			id: 0,
			name: 'Нераспределенные',
			products: [
				{id: 0, name: 'Молоко', warehouse: 'Нераспределенные', count: 3},
				{id: 1, name: 'Кофе', warehouse: 'Нераспределенные', count: 2},
				{id: 2, name: 'Сыр', warehouse: 'Нераспределенные', count: 2},
				{id: 3, name: 'Чай', warehouse: 'Нераспределенные', count: 2},
				{id: 4, name: 'Шоколад', warehouse: 'Нераспределенные', count: 2},
				{id: 5, name: 'Хлеб', warehouse: 'Нераспределенные', count: 2},
				{id: 6, name: 'Печенье', warehouse: 'Нераспределенные', count: 2},
				{id: 7, name: 'Кефир', warehouse: 'Нераспределенные', count: 2},
			]
		},
		{
			id: 1,
			name: 'Первый склад',
			products: [
				{id: 0, name: 'Какао', warehouse: 'Первый склад', count: 3},
			]
		},
		{
			id: 2,
			name: 'Второй склад',
			products: [
				{id: 0, name: 'Киви', warehouse: 'Второй склад', count: 3},
			]
		},
	],
};

const core = (state = INITIAL_STATE, {type, payload}) => {
	switch (type) {
		case ADD_PROD:
			const {form, currentProd} = payload;
			return {
				...state,
				warehouses: state.warehouses.map((el) => {
					if (el.id === 1) {
						return ({
							...el,
							products: [
								...el.products,
								{
									id: el.products.length,
									name: currentProd.name,
									warehouse: el.name,
									count: form,
								}]
						})
					}
					return el
				})
			};
		default:
			return {
				...state,
			};
	}
};

export default core;

// warehouses: {
// ...state.warehouses,
// 		0: {
// 	...state.warehouse[1],
// 			products: {
// 		...state.warehouse[1].products,
// 				payload,
// 		}
// 	},
// },