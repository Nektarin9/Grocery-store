import { transformCategory } from "../transformes";
export const getСategory = () => {
	return fetch(`/categories`)
		.then((loadedCategory) => loadedCategory.json())
		.then((loadedCategory) => {
			return loadedCategory && loadedCategory.map(transformCategory)})
};
