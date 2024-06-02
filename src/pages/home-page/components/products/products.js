import { selectAllProducts, selectGetCategory } from '../../../../selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { actionGetAllProducts, getLoadingProducts } from '../../../../action';
import { CURRENT_PAGE } from '../../constans/current-page';
import { CATEGORIES } from '../../../../constants';
import styles from './products.module.css';
import { NavLink } from 'react-router-dom';

export const Products = ({ products }) => {
	/*
	const [currentPage, setCurrentPage] = useState(CURRENT_PAGE);
	const [isLoading, setIsLoading] = useState(false);
	const allProducts = useSelector(selectAllProducts);
	const selectCategory = useSelector(selectGetCategory);

	const dispatch = useDispatch();
	/*Ленивая загрузка

	const scrollHandler = (e) => {

		if (
			e.target.documentElement.scrollHeight -
				(e.target.documentElement.scrollTop + window.innerHeight) <
				100 &&
			allProducts.length >= currentPage
		) {
			setCurrentPage(currentPage + 4);
		} else if (!isLoading) {
			setIsLoading(true);
		}
	};
	*/
	/*
	useEffect(() => {
		dispatch(getAllProducts());

		dispatch(getLoadingProducts(currentPage));

		if (selectCategory === CATEGORIES.allProducts) {
			document.addEventListener('scroll', scrollHandler);
			return function () {
				document.removeEventListener('scroll', scrollHandler);
			};
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentPage, isLoading, selectCategory]);
*/
	return (
		<>
			{products.map(({ id, imageUrl, price, title, numberGrams }) => {
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
			})}
		</>
	);
};
