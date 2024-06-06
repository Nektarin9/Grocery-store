export const registration = (login, password) =>
	fetch('/register', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			login,
			password,
		}),
	}).then((res) => res.json());
