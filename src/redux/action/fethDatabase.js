import { fethDatabase } from '../../api';
export const actionFethСatalog = () => (dispatch) =>
	fethDatabase("catalog").then((catalog) => {
		dispatch({
			type: 'catalog',
			payload: catalog,
		});
	});


	export const actionFethProducts = () => (dispatch) =>
	fethDatabase("product").then((product) => {
		dispatch({
			type: 'allProducts',
			payload: product,
		});
	});
