import { useDispatch, useSelector } from 'react-redux';
import { selectProduct, selectAddProducts, selectInputCounter } from '../../selectors';
import { checkDuplicates } from './utils';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
	actionGetProduct,
	actionAddProductsBasket,
	actionInputCounter,
} from '../../action';
import { changeFormatPrice } from '../../utils';
import { Loader, BackButton, BtnAndInputCounter } from '../../components';
import { CompositionWidget } from './components';
import styles from './product.module.css';

export const Product = () => {
	const { product_id } = useParams();
	const inputCounter = useSelector(selectInputCounter);
	const [duplicationError, setDuplicationError] = useState(false);
	const [sum, setSum] = useState(0);

	const product = useSelector(selectProduct);

	const productsBasket = useSelector(selectAddProducts);
	
	const dispatch = useDispatch();
	useEffect(() => {
		if (product) {
			setSum(changeFormatPrice(product.priсe * inputCounter));
		}
	}, [inputCounter, product]);

	useEffect(() => {
		dispatch(actionGetProduct(product_id));
		dispatch(actionInputCounter(1));
	}, [dispatch, product_id]);

	const addProductBascet = () => {
		setDuplicationError(false);

		if (checkDuplicates(productsBasket, product)) {
			const arrayBasket = {
				id: product.id,
				title: product.title,
				priсe: product.priсe,
				quantity: product.quantity,
				imageUrl: product.imageUrl,
				sum: Number(sum.replace(' ', '')),
				inputCounter: inputCounter,
			};
			dispatch(actionAddProductsBasket(arrayBasket));
		} else {
			setDuplicationError(true);
		}
	};
	return (
		<>
			<BackButton />
			{product?.id ? (
				<>
					<p className={styles.p_category}>{product.category}</p>
					<div className={styles.container}>
						<div className={styles.left_container}>
							<img src={product.imageUrl} alt={product.title}></img>
							<h3>О товаре</h3>
							<p className={styles.p_gram}>{product.numberGrams}</p>
							<div className={styles.text_content}>{product.content}</div>
							<CompositionWidget product={product} />
						</div>
						<div className={styles.right_container}>
							<h2 className={styles.h2_title}>{product.title}</h2>
							{/* */}
							<p className={styles.p_price}>Цена: {sum} ₽</p>

							<BtnAndInputCounter
								product={product}
								inputCounter={inputCounter}
								pageBasket={false}
							/>
							{/* */}
							{duplicationError && (
								<div className={styles.duplication_Error}>
									<i className="fa fa-check" aria-hidden="true"></i>
									<span className={styles.text_duplication_Erro}>
										Товар уже добавлен в корзину
									</span>
								</div>
							)}
							<button
								className={styles.button_basket}
								onClick={() => addProductBascet()}
							>
								Добавить
							</button>
						</div>
					</div>
				</>
			) : (
				<div className={styles.loader_container}>
					<Loader />
				</div>
			)}
		</>
	);
};
