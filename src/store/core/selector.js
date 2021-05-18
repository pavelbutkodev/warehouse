import { createSelector } from 'reselect';


const selectState = (state) => state.core;

export const getWarehouse = createSelector(selectState, (state) => state.warehouses);
export const getProducts = createSelector(selectState, (state) => state.products);
export const getTheme = createSelector(selectState, (state) => state.blackTheme);