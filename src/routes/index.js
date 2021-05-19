import Products from '../component/UI/Products';
import Warehouses from '../component/UI/Warehouses';
import Warehouse from '../component/UI/Warehouse';
import MoveProducts from '../component/UI/MoveProducts';


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
    path: '/move/:id/',
    component: MoveProducts,
    exact: true,
  },
];
