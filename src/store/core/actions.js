import {
  LOGIN_USER,
} from '../../constants/actionTypes';


export const loginUser = (user) => ({
  type: LOGIN_USER,
  payload: { ...user },
});