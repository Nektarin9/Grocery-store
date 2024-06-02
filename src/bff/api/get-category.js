import { transformCategory } from "../transformes";
export const getСategory = () => {
	return fetch(`http://localhost:4000/store/categories`)
		.then((loadedCategory) => loadedCategory.json())
		.then((loadedCategory) => {
			return loadedCategory && loadedCategory.map(transformCategory)})
};
