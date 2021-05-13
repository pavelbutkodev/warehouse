import {
  ADD_PROD,
  CHANGE_PROD,
  REMOVE_PROD,
  ADD_WAREHOUSE,
  CHANGE_WAREHOUSE,
  REMOVE_WAREHOUSE,
  REMOVE_PROD_FROM_WARE,
  WAREHOUSES_FROM_GENERAL,
  WAREHOUSE_FROM_GENERAL,
  REMOVE_ALL_PROD_FROM_WARE,
  ADD_PROD_IN_WAREHOUSE,
} from '../../constants/actionTypes';


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

export const addWarehouse = (payload) => ({
  type: ADD_WAREHOUSE,
  payload: payload,
});

export const changeWarehouse = (payload) => ({
  type: CHANGE_WAREHOUSE,
  payload: payload,
});

export const removeWarehouse = (payload) => ({
  type: REMOVE_WAREHOUSE,
  payload: payload,
});

export const warehousesFromGeneral = (payload) => ({
  type: WAREHOUSES_FROM_GENERAL,
  payload: payload,
});

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