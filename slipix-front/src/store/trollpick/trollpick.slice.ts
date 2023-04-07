import { createSlice } from '@reduxjs/toolkit';
import { trollpickActions } from './trollpick.actions';
import { trollpickActifBuilder, trollpickOneBuilder, trollpickSoonBuilder } from './trollpick.reducers';
import { TrollpickState } from './models';

const initialState: TrollpickState = {
	trollpick: {},
	trollpickActif: [],
	trollpickSoon: [],
};

const trollpickSlice = createSlice({
	name: 'trollpick',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		trollpickActifBuilder(builder);
		trollpickSoonBuilder(builder);
		trollpickOneBuilder(builder);
	},
});

export const trollpickReducer = trollpickSlice.reducer;
export const selectTrollpick = (state: { trollpick: TrollpickState }) => state.trollpick;
export const trollpick_actions = { ...trollpickSlice.actions, ...trollpickActions };
