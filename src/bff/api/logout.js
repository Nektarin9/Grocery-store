export const logout = () =>
	fetch('/logout', {
		method: 'POST',
	}).then((res) => res.json());
