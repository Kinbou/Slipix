import {  ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';

import { TrollpickState } from './models';
import { buildExtraReducer } from '../store-helper';
import { trollpickActions } from './trollpick.actions';

export const trollpickActifBuilder = (builder: ActionReducerMapBuilder<any>) => {
	buildExtraReducer(
		builder,
		trollpickActions.getTrollpicksActif,
		(state: TrollpickState, action: PayloadAction<any>) => {
			console.log('reducer trollpick', action.payload);
			state.trollpickActif = action.payload;
		},
	);
};

export const trollpickSoonBuilder = (builder: ActionReducerMapBuilder<any>) => {
	buildExtraReducer(
		builder,
		trollpickActions.getTrollpicksSoon,
		(state: TrollpickState, action: PayloadAction<any>) => {
			console.log('reducer trollpick', action.payload);
			state.trollpickSoon = action.payload;
		},
	);
};
