import {  ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';

import { TrollpickState } from './models';
import { Trollpick } from '@/api/trollpick/models';
import { buildExtraReducer } from '../store-helper';
import { trollpickActions } from './trollpick.actions';



export const trollpickActifBuilder = (builder: ActionReducerMapBuilder<any>) => {
	buildExtraReducer(
		builder,
		trollpickActions.getTrollpicksActif,
		(state: TrollpickState, action: PayloadAction<Array<Trollpick>>) => {
			state.trollpickActif = action.payload;
		},
	);
};

export const trollpickSoonBuilder = (builder: ActionReducerMapBuilder<any>) => {
	buildExtraReducer(
		builder,
		trollpickActions.getTrollpicksSoon,
		(state: TrollpickState, action: PayloadAction<Array<Trollpick>>) => {
			state.trollpickSoon = action.payload;
		},
	);
};

export const trollpickOneBuilder = (builder: ActionReducerMapBuilder<any>) => {
	buildExtraReducer(
		builder,
		trollpickActions.getOneTrollpick,
		(state: TrollpickState, action: PayloadAction<Trollpick>) => {
			state.trollpick = action.payload;
		},
	);
};
