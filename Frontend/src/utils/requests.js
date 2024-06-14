export const request = (url, method, data) => {
	return fetch(url, {
		headers: {
			'content-type': 'application/json',
		},
		method: method || 'GET',
		body: data ? JSON.stringify(data) : undefined,
	}).then((res) => (method !== 'DELETE' ? res.json() : null));
};
