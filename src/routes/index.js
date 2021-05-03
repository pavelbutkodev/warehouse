import Main from "../component/Shared/Main";
import Products from "../component/UI/Products";
import Warehouses from "../component/UI/Warehouse";

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
