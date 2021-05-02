import {
	LOGIN_USER,
} from '../../constants/actionTypes';


const INITIAL_STATE = {
  warehouses: [
		{
			id: 0,
			name: 'First ware',
			products: [
				{id: 0, name: 'First Product', warehouse: '', count: 3},
			]
		},
		{id: 1, name: 'Second ware', products: []},
		{id: 2, name: 'Third ware', products: []},
	],
	products: [
		{id: 0, name: 'First Product', warehouse: '', count: 3},
		{id: 1, name: 'Second Product', warehouse: '', count: 3},
		{id: 2, name: 'Third Product', warehouse: '', count: 3},
	],
};

export default (state = INITIAL_STATE, {type, payload}) => {
	switch (type) {
		case LOGIN_USER:
			return {
				...state, warehouses: payload,
			};
		default:
			return {
				...state,
			};
	}
};
