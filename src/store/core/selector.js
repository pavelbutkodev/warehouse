import { createSelector } from 'reselect';

const selectState = (state) => state.core;

export const getWarehouse = createSelector(selectState, (state) => state.warehouses);

export const getUnallocatedProducts = createSelector(selectState, (state) => state.warehouses[0].products);

export const getWorkWarehouses = createSelector(selectState, (state) => state.warehouses.filter((el) => el.id !== 0));
