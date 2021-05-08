import {
  ADD_PROD,
  CHANGE_PROD,
  REMOVE_PROD,
  ADD_WAREHOUSE,
  CHANGE_WAREHOUSE,
  REMOVE_WAREHOUSE,
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