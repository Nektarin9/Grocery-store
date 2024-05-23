import { useState } from 'react';
import { PLUS, MINUS } from '../../../../constants';
import { useDispatch } from 'react-redux';
import {
	actionUpdateInputPlus,
	actionUpdateInputMinus,
	actionUpdateInput,
	actionInputCounter,
} from '../../../../action';

import styles from './inputCounter.module.css';

export const BtnAndInputCounter = ({ product, inputCounter, pageBasket }) => {
	const [remainingGoods, setRemainingGoods] = useState(false);
	const [blockingBtnPlus, setBlockingBtnPlus] = useState(false);

	const [inputCounterState, setInputCounterState] = useState(
		pageBasket ? inputCounter : 1,
	);
	const [blockingBtnMinus, setBlockingBtnMinus] = useState(
		inputCounterState > 1 ? false : true,
	);

	const dispatch = useDispatch();



	
	/* Валидация кнопок */
	const btnCounter = (action) => {
		if (inputCounterState <= 2) {
			setBlockingBtnMinus(true);
		} else {
			setBlockingBtnMinus(false);
		}
		if (action === PLUS) {
			if (inputCounterState === product.quantity - 1) {
				setBlockingBtnPlus(true);
			}
			setBlockingBtnMinus(false);
			if (inputCounterState < product.quantity) {
				dispatch(actionInputCounter(inputCounter + 1));
				if (pageBasket) {
					dispatch(actionUpdateInputPlus(product.id));
				}

				setInputCounterState(inputCounterState + 1);
			} else {
				setRemainingGoods(true);
			}
		} else if (action === MINUS) {
			setBlockingBtnPlus(false);
			if (inputCounterState > 1) {
				dispatch(actionInputCounter(inputCounter - 1));
				if (pageBasket) {
					dispatch(actionUpdateInputMinus(product.id));
				}
				setInputCounterState(inputCounterState - 1);
			}
		}
	};
	/* Валидация  инпута */
	const onChangeInputCounter = ({ target }) => {
		if (
			target.value.length < 3 &&
			Number(target.value) <= product.quantity &&
			Number(target.value) > 0
		) {
			if (Number(target.value) < 2) {
				setBlockingBtnMinus(true);
			} else {
				setBlockingBtnMinus(false);
			}
			if (Number(target.value) === product.quantity) {
				setBlockingBtnPlus(true);
			} else {
				setBlockingBtnPlus(false);
			}
			dispatch(actionInputCounter(Number(target.value)));
			if (pageBasket) {
				dispatch(actionUpdateInput(product.id, Number(target.value)));
			}
			setInputCounterState(Number(target.value));

			setRemainingGoods(false);
		} else if (Number(target.value) > product.quantity) {
			setRemainingGoods(true);
		} else {
			if (pageBasket) {
				dispatch(actionUpdateInput(product.id, 1));
			}
			setBlockingBtnMinus(true);
			dispatch(actionInputCounter(1));
			setInputCounterState(1);
		}
	};
	return (
		<>
			<div className={styles.counter_container}>
				<button
					className={
						blockingBtnMinus
							? `${styles.btn_cointer_block}`
							: `${styles.button_counter}`
					}
					disabled={blockingBtnMinus}
					onClick={() => btnCounter(MINUS)}
				>
					<i className="fa fa-minus-square" aria-hidden="true"></i>
				</button>
				<input
					type="number"
					onChange={onChangeInputCounter}
					onBlur={() => {
						if (!inputCounterState) {
							setInputCounterState(1);
						}
						if (inputCounterState === 1) {
							setBlockingBtnPlus(false);
						}

						setRemainingGoods(false);
					}}
					maxLength={2}
					className={styles.input_counter}
					value={inputCounterState}
				/>
				<button
					className={
						blockingBtnPlus
							? `${styles.btn_cointer_block}`
							: `${styles.button_counter}`
					}
					disabled={blockingBtnPlus}
					onClick={() => btnCounter(PLUS)}
				>
					<i className="fa fa-plus-square" aria-hidden="true"></i>
				</button>
				{remainingGoods && (
					<span className={styles.error_counter}>
						Осталось {product.quantity} шт
					</span>
				)}
			</div>
		</>
	);
};
