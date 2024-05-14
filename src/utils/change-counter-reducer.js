import { MINUS, PLUS, INPUT, DELETE } from '../constants';
export const changeProductBasket = (arrayBasket, idProductAndValue, type) => {
	arrayBasket.forEach(({ id }, index) => {
		if (id === idProductAndValue.id) {
			if (type === PLUS) {
				arrayBasket[index].inputCounter += 1;
			} else if (type === MINUS) {
				arrayBasket[index].inputCounter -= 1;
			} else if (type === INPUT) {
				arrayBasket[index].inputCounter = idProductAndValue.value;
			} else if (type === DELETE) {
				arrayBasket.splice(index, 1);
			}
		}
	});
};
