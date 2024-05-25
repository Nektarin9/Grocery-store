import { transformCategory } from '../transformes';

export const addCategory = (data) =>
	fetch('http://localhost:3005/categories', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			category: data.nameCategory,
			image_url: data.urlImg,
		}),
	})
		.then((loadedCategory) => loadedCategory.json())
		.then((loadedCategory) => loadedCategory && transformCategory(loadedCategory));
