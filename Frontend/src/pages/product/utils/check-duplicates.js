export const checkDuplicates = (productsBasket, product) => {
	let counter = 0;
	if (productsBasket.length >= 1) {
		productsBasket.forEach(({ id }) => {
			if (id === product.id) {
				counter = 1;
				return;
			}
		});
	}
	if (counter) {
		return false;
	} else {
		return true;
	}
};
