import Main from "../component/Main";
import Products from "../component/Products";
import Warehouses from "../component/Warehouse";

export const routes = [
	{
		path: '/main/',
		component: Main,
		exact: true,
	},
	{
		path: '/products/',
		component: Products,
		exact: true,
	},
	{
		path: '/warehouses/',
		component: Warehouses,
		exact: true,
	},
];
