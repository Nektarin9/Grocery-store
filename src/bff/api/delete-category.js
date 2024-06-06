export const deleteCategory = (id) =>
	fetch(`/categories/${id}`, {
		method: 'DELETE',
	});
