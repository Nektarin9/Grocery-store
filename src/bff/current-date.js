export const currentDate = () => {
	let today = new Date();
	let dd = String(today.getDate()).padStart(2, '0');
	let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	let time = `${today.getHours()}:${today.getMinutes()}`;
	let yyyy = today.getFullYear();
	return mm + '-' + dd + '-' + yyyy + ' ' + time;
};
