import { ActionReducerMapBuilder, AsyncThunk, Draft, PayloadAction } from '@reduxjs/toolkit';

export interface BaseApiError {
  code?: string;
}

export interface BaseState {
  error?: string;
  success?: boolean;
}

export const buildExtraReducer = <T extends BaseState, Req, Res>(
	builder: ActionReducerMapBuilder<T>,
	action: AsyncThunk<Res, Req, any>,
	onSuccess: (state: Draft<T>, action: PayloadAction<Res>) => void,
	onError?: (state: Draft<T>, action: any) => void,
): void => {
	builder.addCase(action.fulfilled, onSuccess);

	builder.addCase(action.pending, (state) => {
		state.error = undefined;
		state.success = undefined;
	});

	if (onError) {
		builder.addCase(action.rejected, onError);
	} else {
		builder.addCase(action.rejected, (state, action) => {
			const error = action.error as BaseApiError;
			state.error = `api.${error.code}`;
		});
	}
};
