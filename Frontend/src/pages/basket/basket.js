import { useDispatch, useSelector } from 'react-redux';
import { BackButton, Button } from '../../components';
import { selectAddProducts } from '../../selectors';
import { BtnAndInputCounter } from '../../components';
import { calculateAmount, changeFormatPrice } from '../../utils';
import { actionBasketDelete, actionClearProduct } from '../../action';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import styles from './basket.module.css';

export const Basket = () => {
	const productsBasket = useSelector(selectAddProducts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(actionClearProduct());
	}, [dispatch]);

	return (
		<>
			<BackButton />
			<div className={styles.basket_container}>
				<div className={styles.price_container}>
					<div>
						<p className={styles.p_price}>
							Итого: <br />
							{calculateAmount(productsBasket)} ₽
						</p>
						<Button className={styles.btn}>Оформить заказ</Button>
					</div>
				</div>
			</div>
			{productsBasket.map(
				({ id, imageUrl, inputCounter, price, quantity, sum, title }) => (
					<div id={id} key={id} className={styles.product_contaner}>
						<Link to={`/product/${id}`}>
							<img
								src={imageUrl[0].imgSrc}
								className={styles.img_product}
								alt={title}
							></img>
						</Link>

						<div className={styles.inputn_container}>
							<p className={styles.p_title}>{title}</p>
							<BtnAndInputCounter
								product={{
									id,
									imageUrl,
									inputCounter,
									price,
									quantity,
									sum,
									title,
								}}
								inputCounter={inputCounter}
								pageBasket={true}
							/>
						</div>
						<button
							onClick={() => dispatch(actionBasketDelete(id))}
							className={styles.btn_close}
						>
							<i className="fa fa-times" aria-hidden="true"></i>
						</button>
						<p className={styles.p_price}>
							{changeFormatPrice(inputCounter * price)} ₽
						</p>
					</div>
				),
			)}
		</>
	);
};
