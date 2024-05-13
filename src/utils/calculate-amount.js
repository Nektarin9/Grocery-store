import { changeFormatPrice } from "./change-format-price";
export const calculateAmount = (productsBasket) => {
	let sumPrice = 0
	console.log(productsBasket);
	productsBasket.forEach(({inputCounter, priсe}) => {
		console.log(inputCounter, priсe);
		sumPrice = sumPrice + inputCounter * priсe
	});

	return changeFormatPrice(sumPrice)
};
