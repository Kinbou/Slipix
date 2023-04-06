import { createAsyncThunk } from '@reduxjs/toolkit';

import { getTrollpickActif, getTrollpickSoon } from '@/api/trollpick/trollpick-api';

// const getSettings = createAsyncThunk<AppSettings>('app/get-settings', async () => {
// 	const response = await new ApplicativeApi().getConfig();
// 	return response;
// });

const getTrollpicksActif = createAsyncThunk<any>('trollpick/get-active', async () => {
	const response = await getTrollpickActif();
	return response;
});

const getTrollpicksSoon = createAsyncThunk<any>('trollpick/get-soon', async () => {
	const response = await getTrollpickSoon();
	return response;
});


export const trollpickActions = {
	getTrollpicksActif,
	getTrollpicksSoon,
};
