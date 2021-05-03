import {
  ADD_PROD,
} from '../../constants/actionTypes';


export const addProd = (payload) => ({
  type: ADD_PROD,
  payload: payload,
});