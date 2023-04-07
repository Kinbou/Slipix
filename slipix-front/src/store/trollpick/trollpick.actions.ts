import { createAsyncThunk } from '@reduxjs/toolkit';

import { getTrollpickActif, getTrollpickSoon, getTrollpick } from '@/api/trollpick/trollpick-api';

const getTrollpicksActif = createAsyncThunk<any>('trollpick/get-active', async () => {
	const response = await getTrollpickActif();
	return response;
});

const getTrollpicksSoon = createAsyncThunk<any>('trollpick/get-soon', async () => {
	const response = await getTrollpickSoon();
	return response;
});

const getOneTrollpick = createAsyncThunk<any>('trollpick/get-one', async (id: any) => {
	const response = await getTrollpick(id);
	return response;
});


export const trollpickActions = {
	getTrollpicksActif,
	getTrollpicksSoon,
	getOneTrollpick,
};
