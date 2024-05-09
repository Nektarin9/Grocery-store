import {
	selectLoadingProducts,
	getProductSearch,
	selectAllProducts,
	selectGetCategory,
} from '../../../../selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllProducts, getLoadingProducts } from '../../../../action';
import { CURRENT_PAGE } from '../../constans/current-page';
import { CATEGORIES } from '../../../../constants';
import { producSearch } from '../../../../utils/product-search/produc-search';
import styles from './products.module.css';

export const Products = () => {
	const [currentPage, setCurrentPage] = useState(CURRENT_PAGE);
	const [isLoading, setIsLoading] = useState(false);
	const productСatalog = useSelector(selectLoadingProducts);
	const allProducts = useSelector(selectAllProducts);
	const selectCategory = useSelector(selectGetCategory);
	const inputSearch = useSelector(getProductSearch);

	const dispatch = useDispatch();
	const scrollHandler = (e) => {
		/*Ленивая загрузка*/
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

	/*Поиск*/

	const products = producSearch(
		inputSearch,
		allProducts,
		productСatalog,
		selectCategory,
	);

	return (
		<>
			{products.map(({ id, image_url, priсe, title, number_grams }) => {
				return (
					<li key={id} id={id} className={`${styles.products} ${styles.scale}`}>
						<img
							className={`${styles.img_products} ${styles.scale}`}
							src={image_url}
							alt={title}
						></img>
						<p className={styles.price}>{`${priсe} ₽`}</p>
						<p className={styles.nameProduct}>{title}</p>
						<p className={styles.text_gram}>{number_grams}</p>
						<button className={styles.buyButton}>+</button>
					</li>
				);
			})}
		</>
	);
};
