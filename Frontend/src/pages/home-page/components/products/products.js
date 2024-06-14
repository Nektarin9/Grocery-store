import {
	selectBtnSearch,
	selectCurrentPage,
	selectGetCategory,
	selectProductSearch,
	selectSort,
} from '../../../../selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { actionCurrentPage, actionGetAllProducts } from '../../../../action';
import styles from './products.module.css';
import { NavLink } from 'react-router-dom';
import { request } from '../../../../utils';
import { Loader } from '../../../../components';

export const Products = ({ allProducts }) => {
	const currentPage = useSelector(selectCurrentPage);
	const [isLoading, setIsLoading] = useState(false);
	const [numberGoods, setNumberGoods] = useState(null);
	const category = useSelector(selectGetCategory);
	const inputSearch = useSelector(selectProductSearch);
	const btnSearch = useSelector(selectBtnSearch);
	const sort = useSelector(selectSort);
	const dispatch = useDispatch();

	const [isLoadingPage, setIsLoadingPage] = useState(true); // Инициализируем состояние загрузки
	const [errorMessage, setErrorMessage] = useState(''); // Инициализируем состояние ошибки

	useEffect(() => {
		setTimeout(() => {
			setIsLoadingPage(false); // Убираем лоадер через 3 секунды
			setErrorMessage('Хм, похоже такого товара нет'); // Устанавливаем сообщение об ошибке
		}, 3000);
	}, []); // Эффект выполняется один раз при первом рендере компонента

	const scrollHandler = (e) => {
		/*Ленивая загрузка*/
		if (
			e.target.documentElement.scrollHeight -
				(e.target.documentElement.scrollTop + window.innerHeight) <
				100 &&
			numberGoods >= currentPage
		) {
			dispatch(actionCurrentPage(currentPage + 8));
			setIsLoading(false);
		} else if (!isLoading) {
			setIsLoading(true);
		}
	};

	useEffect(() => {
		if (inputSearch || category) {
			request(`/products?_&search=${inputSearch}&category=${category}`).then(
				(products) => {
					setNumberGoods(products.allProducts.length);
				},
			);
		} else {
			request(`/products`).then((products) => {
				setNumberGoods(products.allProducts.length);
			});
		}
		dispatch(actionGetAllProducts(currentPage, inputSearch, sort, category));
		document.addEventListener('scroll', scrollHandler);
		return function () {
			document.removeEventListener('scroll', scrollHandler);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoading, btnSearch, numberGoods, sort, category]);

	return (
		<>
			{!!allProducts.length ? (
				allProducts.map(({ id, imageUrl, price, title, numberGrams }) => {
					return (
						<NavLink key={id} to={`/product/${id}`}>
							<li id={id} className={`${styles.products} ${styles.scale}`}>
								<img
									className={`${styles.img_products} ${styles.scale}`}
									src={imageUrl}
									alt={title}
								></img>
								<p className={styles.price}>{`${price} ₽`}</p>
								<p className={styles.nameProduct}>{title}</p>
								<p className={styles.text_gram}>{numberGrams} г</p>
								<button className={styles.buyButton}>+</button>
							</li>
						</NavLink>
					);
				})
			) : (
				<>
					{isLoadingPage && (
						<div className={styles.loader_container}>
							<Loader />
						</div>
					)}
					{!isLoadingPage && (
						<div className={styles.loader_container}>{errorMessage}</div>
					)}
				</>
			)}
		</>
	);
};
