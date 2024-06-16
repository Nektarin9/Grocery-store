export const transformObject = (payload) => {
	const array = [];
	for (let i = 0; i < payload.imageUrl.length; i++) {
		array.push({ imgSrc: payload.imageUrl[i], target: i ? false : true });
	}
	return array;
};
