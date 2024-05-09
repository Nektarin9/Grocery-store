import { CATEGORIES } from '../../constants';

export const producSearch = (
	inputSearch,
	allProducts,
	productСatalog,
	selectCategory,
) => {
	const arrayProducts = [];

	const search = (products, typeSearch) => {
		for (let i = 0; i < products.length; i++) {
			if (typeSearch === 'SEARCH_BY_CATEGORY') {
				if (products[i].category === selectCategory) {
					arrayProducts.push(products[i]);
				}
			} else if (typeSearch === 'SEARCH_STRING') {
				if (products[i].title.toLowerCase().includes(inputSearch.toLowerCase())) {
					arrayProducts.push(products[i]);
				}
			}
		}
	};

	if (inputSearch.length >= 2) {
		search(allProducts, 'SEARCH_STRING');
	} else if (selectCategory !== CATEGORIES.allProducts) {
		search(allProducts, 'SEARCH_BY_CATEGORY');
	} else {
		search(productСatalog, 'SEARCH_STRING');
	}
	return arrayProducts;
};
