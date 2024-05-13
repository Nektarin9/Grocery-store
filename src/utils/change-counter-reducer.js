import { MINUS, PLUS, INPUT } from '../constants';
export const changeCounterReducer = (arrayBasket, idProductAndValue, type) => {

	arrayBasket.forEach(({ id }, index) => {
		if (id === idProductAndValue.id) {
			if (type === PLUS) {
				arrayBasket[index].inputCounter += 1;
			} else if (type === MINUS) {
				arrayBasket[index].inputCounter -= 1;
			} else if (type === INPUT) {
				arrayBasket[index].inputCounter = idProductAndValue.value;
			}
		}
	});
};
