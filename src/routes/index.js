import Products from "../component/newUI/Products";
import Warehouses from "../component/newUI/Warehouses";
import Warehouse from "../component/newUI/Warehouse";
import MoveProducts from "../component/newUI/MoveProducts";

export const routes = [
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
	{
		path: '/warehouse/:id/',
		component: Warehouse,
		exact: true,
	},
	{
		path: '/move/',
		component: MoveProducts,
		exact: true,
	},
];
