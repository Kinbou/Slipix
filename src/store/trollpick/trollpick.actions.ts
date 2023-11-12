import { createAsyncThunk } from '@reduxjs/toolkit';

import { getTrollpickActif, getTrollpickSoon, getTrollpick } from '@/api/trollpick/trollpick-api';
import { Trollpick } from '@/api/trollpick/models';

const getTrollpicksActif = createAsyncThunk<Trollpick[]>('trollpick/get-active', async () => {
	const response = await getTrollpickActif();
	return response;
});

const getTrollpicksSoon = createAsyncThunk<Trollpick[]>('trollpick/get-soon', async () => {
	const response = await getTrollpickSoon();
	return response;
});

const getOneTrollpick = createAsyncThunk<Trollpick, string>('trollpick/get-one', async (id: string) => {
	const response = await getTrollpick(id);
	return response;
});



export const trollpickActions = {
	getTrollpicksActif,
	getTrollpicksSoon,
	getOneTrollpick,
};
