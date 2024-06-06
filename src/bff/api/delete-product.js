export const deleteProduct = (id) =>
	fetch(`/product/${id}/edit`, {
		method: 'DELETE',
	});
