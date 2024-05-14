import { changeFormatPrice } from "./change-format-price";
export const calculateAmount = (productsBasket) => {
	let sumPrice = 0
	productsBasket.forEach(({inputCounter, priсe}) => {
		sumPrice = sumPrice + inputCounter * priсe
	});

	return changeFormatPrice(sumPrice)
};
