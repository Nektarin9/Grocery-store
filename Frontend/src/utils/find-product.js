export const findProduct = (products, id) => {
	let product;
	products.forEach((elem) => {
		if (id === elem.id) {
			product = elem;
		}
	});
	return product;
};
