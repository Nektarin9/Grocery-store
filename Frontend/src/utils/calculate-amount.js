import { changeFormatPrice } from './change-format-price';
export const calculateAmount = (productsBasket) => {
	let sumPrice = 0;
	productsBasket.forEach(({ inputCounter, price }) => {
		sumPrice = sumPrice + inputCounter * price;
	});

	return changeFormatPrice(sumPrice);
};
