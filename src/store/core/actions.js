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
  MOVE_PROD_IN_WARE,
  MOVE_PROD_FROM_WARE,
  SET_BLACK_THEME,
} from '../../constants/actionTypes';


// PRODUCTS
export const addProd = (payload) => ({
  type: ADD_PROD,
  payload: payload,
});

export const changeProd = (payload) => ({
  type: CHANGE_PROD,
  payload: payload,
});

export const removeProd = (payload) => ({
  type: REMOVE_PROD,
  payload: payload,
});

// WAREHOUSES
export const addWarehouses = (payload) => ({
  type: ADD_WAREHOUSES,
  payload: payload,
});

export const changeWarehouses = (payload) => ({
  type: CHANGE_WAREHOUSES,
  payload: payload,
});

export const removeWarehouses = (payload) => ({
  type: REMOVE_WAREHOUSES,
  payload: payload,
});

export const warehousesFromGeneral = (payload) => ({
  type: WAREHOUSES_FROM_GENERAL,
  payload: payload,
});

// WAREHOUSE
export const removeProdFromWare = (payload) => ({
  type: REMOVE_PROD_FROM_WARE,
  payload: payload,
});

export const warehouseFromGeneral = (payload) => ({
  type: WAREHOUSE_FROM_GENERAL,
  payload: payload,
});

export const removeAllProdFromWare = (payload) => ({
  type: REMOVE_ALL_PROD_FROM_WARE,
  payload: payload,
});

export const addProdInWarehouse = (payload) => ({
  type: ADD_PROD_IN_WAREHOUSE,
  payload: payload,
});

//MOVE
export const moveProdInWare = (payload) => ({
  type: MOVE_PROD_IN_WARE,
  payload: payload,
});

export const moveProdFromWare = (payload) => ({
  type: MOVE_PROD_FROM_WARE,
  payload: payload,
});

// BLACK THEME
export const setBlackTheme = (payload) => ({
  type: SET_BLACK_THEME,
  payload: payload,
});