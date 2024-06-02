export const deleteCategory = (id) =>
	fetch(`http://localhost:4000/store/categories/${id}`, {
		method: 'DELETE',
	});
