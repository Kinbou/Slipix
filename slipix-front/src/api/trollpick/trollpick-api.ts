const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export const getTrollpickActif = async () => {
	const res = await fetch(`${apiBaseUrl}/api/v1/trollpicks?actif=true`, {
		headers: {
			accept: 'application/json',
			'Content-Type': 'application/json',
		},
	});
	return res.json(); 
};

export const getTrollpickSoon = async () => {
	const res = await fetch(`${apiBaseUrl}/api/v1/trollpicks?soon=true`, {
		headers: {
			accept: 'application/json',
			'Content-Type': 'application/json',
		},
	});
	return res.json(); 
};
