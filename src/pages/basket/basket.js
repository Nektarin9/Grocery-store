import { useDispatch, useSelector } from 'react-redux';
import { BackButton } from '../../components';
import { selectAddProducts } from '../../selectors';
import { BtnAndInputCounter } from '../../components';
import { calculateAmount, changeFormatPrice } from '../../utils';
import styles from './basket.module.css';

export const Basket = () => {
	const productsBasket = useSelector(selectAddProducts);
	const dispatch = useDispatch();
	return (
		<>
			<BackButton />
			<div className={styles.basket_container}>
				<div className={styles.price_container}>
					<div>
						<p className={styles.p_price}>
							Итого: <br />{calculateAmount(productsBasket)} ₽
						</p>
						<button className={styles.btn}>Оформить заказ</button>
					</div>
				</div>
			</div>
			{productsBasket.map(
				({ id, imageUrl, inputCounter, priсe, quantity, sum, title }) => (
					<div id={id} key={id} className={styles.product_contaner}>
						<img
							src={imageUrl}
							className={styles.img_product}
							alt={title}
						></img>
						<BtnAndInputCounter
							product={{
								id,
								imageUrl,
								inputCounter,
								priсe,
								quantity,
								sum,
								title,
							}}
							inputCounter={inputCounter}
							pageBasket={true}
						/>
						<p>{changeFormatPrice(inputCounter * priсe)} ₽</p>
					</div>
				),
			)}
		</>
	);
};
