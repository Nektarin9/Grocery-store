export const changeProduct = (allProducts, payload, type) => {
	if (type === 'UPDATE') {
		const copyAllProducts = [...allProducts];
		copyAllProducts.forEach(({ id }, index) => {
			if (id === payload.id) {
				copyAllProducts[index] = { ...payload };
			}
		});
		return copyAllProducts;
	} else if (type === 'DELETE') {
		return allProducts.filter((product) => product.id !== payload);
	} else if (type === 'ADD') {
		allProducts.push(payload);
		return allProducts
	}
};
