import { useDispatch, useSelector } from 'react-redux';
import {
	selectProduct,
	selectAddProducts,
	selectInputCounter,
	selectUser,
} from '../../selectors';
import { checkDuplicates } from './utils';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
	actionGetProduct,
	actionAddProductsBasket,
	actionInputCounter,
	actionUpdateStatusProduct,
	actionGetStatusEditing,
} from '../../action';
import { changeFormatPrice } from '../../utils';
import { Loader, BackButton, BtnAndInputCounter, Button, Slider } from '../../components';
import { CompositionWidget } from './components';
import { accessCheck } from '../../utils/access-check';
import styles from './product.module.css';

export const Product = () => {
	const { product_id } = useParams();
	const inputCounter = useSelector(selectInputCounter);
	const [duplicationError, setDuplicationError] = useState(false);
	const [sum, setSum] = useState(0);
	const navigate = useNavigate();
	const product = useSelector(selectProduct);
	const productsBasket = useSelector(selectAddProducts);
	const user = useSelector(selectUser);

	const [img, setImg] = useState(null)
	const dispatch = useDispatch();
	useEffect(() => {
		if (product) {
			setSum(changeFormatPrice(product.price * inputCounter));
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
				price: product.price,
				quantity: product.quantity,
				imageUrl: product.imageUrl,
				sum: Number(sum.replace(' ', '')),
				inputCounter: inputCounter,
			};
			dispatch(actionAddProductsBasket(arrayBasket));
			navigate('/');
			dispatch(actionUpdateStatusProduct('Товар успешно добавлен в корзину'));
			dispatch(actionGetStatusEditing(true));
		} else {
			setDuplicationError(true);
		}
	};

	return (
		<>
			<BackButton />
			{product?.id ? (
				<>
					<div className={styles.edit_container}>
						{accessCheck(user, 'ADMIN') ? (
							<NavLink to={`/product/${product.id}/edit`}>
								<i
									className="fa fa-pencil-square-o fa-2x"
									aria-hidden="true"
								></i>
							</NavLink>
						) : (
							<></>
						)}
					</div>
					<p className={styles.p_category}>{product.category}</p>
					<div className={styles.container}>
						<div className={styles.left_container}>
							<img
								className={styles.img_product}
								src={img ? img : product.imageUrl[0].imgSrc}
								alt={product.title}
							></img>
							<div className={styles.slider_container}>
								<Slider imageUrl={product.imageUrl}
								setImg ={setImg}></Slider>
							</div>
							<h3>О товаре</h3>
							<p className={styles.p_gram}>{product.numberGrams} г</p>
							<div className={styles.text_content}>{product.content}</div>
							<CompositionWidget product={product} />
						</div>
						<div className={styles.right_container}>
							<h2 className={styles.h2_title}>{product.title}</h2>

							<p className={styles.p_price}>Цена: {sum} ₽</p>

							<BtnAndInputCounter
								product={product}
								inputCounter={inputCounter}
								pageBasket={false}
							/>

							{duplicationError && (
								<div className={styles.duplication_Error}>
									<i className="fa fa-check" aria-hidden="true"></i>
									<span className={styles.text_duplication_Erro}>
										Товар уже добавлен в корзину
									</span>
								</div>
							)}
							<div className={styles.button_container}>
								<Button onClick={addProductBascet}>Добавить</Button>
							</div>
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
