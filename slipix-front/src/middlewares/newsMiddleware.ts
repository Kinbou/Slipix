import axios from 'axios';

import { FETCH_ALL_NEWS, saveAllNews } from '@/actions/news';

const newsMiddleware = (store: any) => (next: any) => (action: any) => {
	switch (action.type) {
	case FETCH_ALL_NEWS:
		axios({
			method: 'GET',
			url: 'https://backend-api.slipix-progresser-sur-league-of-legends.fr/api/v1/news',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		})
			.then((response) => {
				store.dispatch(saveAllNews(response.data));
			})
			.catch((error) => {
				console.warn('error', error);
			});
		break;

	default:
		next(action);
	}
};

export default newsMiddleware;
