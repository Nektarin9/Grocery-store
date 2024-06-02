export const deleteProduct = (id) =>
	fetch(`http://localhost:4000/store/product/${id}`, {
		method: 'DELETE',
	});
