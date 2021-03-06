import {
  ADD_PROD,
  CHANGE_PROD,
  REMOVE_PROD,
  ADD_WAREHOUSES,
  CHANGE_WAREHOUSES,
  REMOVE_WAREHOUSES,
  REMOVE_PROD_FROM_WARE,
  WAREHOUSES_FROM_GENERAL,
  WAREHOUSE_FROM_GENERAL,
  REMOVE_ALL_PROD_FROM_WARE,
  ADD_PROD_IN_WAREHOUSE,
  MOVE_PROD_FROM_WARE,
  SET_BLACK_THEME,
} from '../../constants/actionTypes';


// PRODUCTS
export const addProd = (payload) => ({
  type: ADD_PROD,
  payload,
});

export const changeProd = (payload) => ({
  type: CHANGE_PROD,
  payload,
});

export const removeProd = (payload) => ({
  type: REMOVE_PROD,
  payload,
});

// WAREHOUSES
export const addWarehouses = (payload) => ({
  type: ADD_WAREHOUSES,
  payload,
});

export const changeWarehouses = (payload) => ({
  type: CHANGE_WAREHOUSES,
  payload,
});

export const removeWarehouses = (payload) => ({
  type: REMOVE_WAREHOUSES,
  payload,
});

export const warehousesFromGeneral = (payload) => ({
  type: WAREHOUSES_FROM_GENERAL,
  payload,
});

// WAREHOUSE
export const removeProdFromWare = (payload) => ({
  type: REMOVE_PROD_FROM_WARE,
  payload,
});

export const warehouseFromGeneral = (payload) => ({
  type: WAREHOUSE_FROM_GENERAL,
  payload,
});

export const removeAllProdFromWare = (payload) => ({
  type: REMOVE_ALL_PROD_FROM_WARE,
  payload,
});

export const addProdInWarehouse = (payload) => ({
  type: ADD_PROD_IN_WAREHOUSE,
  payload,
});

// MOVE
export const moveProdFromWare = (payload) => ({
  type: MOVE_PROD_FROM_WARE,
  payload,
});

// BLACK THEME
export const setBlackTheme = (payload) => ({
  type: SET_BLACK_THEME,
  payload,
});
