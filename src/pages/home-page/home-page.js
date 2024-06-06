import { Catalog, Products } from './components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectGetCategory,
	selectLoadingProducts,
	selectProductSearch,
	selectAllProducts,
} from '../../selectors';
import { actionGetСatalogСategories, actionClearProduct } from '../../action';
import { producSearch } from '../../utils/produc-search';
import { useState } from 'react';
import { Loader } from '../../components';
import { NavLink } from 'react-router-dom';
import styles from './homePage.module.css';

export const HomePage = () => {
	const [isSort, setIsSort] = useState(false);
	const catrgory = useSelector(selectGetCategory);

	const productСatalog = useSelector(selectLoadingProducts);
	const inputSearch = useSelector(selectProductSearch);
	const allProducts = useSelector(selectAllProducts);
	const selectCategory = useSelector(selectGetCategory);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(actionGetСatalogСategories());
		dispatch(actionClearProduct())
	}, [dispatch, catrgory]);

	/*Поиск*/

	const products = producSearch(
		inputSearch,
		allProducts,
		productСatalog,
		selectCategory,
	);

	if (isSort) {
		products.sort((a, b) => b.price - a.price);
	} else {
		products.sort((a, b) => a.price - b.price);
	}

	return (
		<>
			<ul className={styles.catalog}>
				<div className={styles.flex_catalog}>
					<h2 className={styles.h2_catalog}>Каталог</h2>
					<NavLink to={"/editing-category"}>
						<i className="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>
					</NavLink>
				</div>
				<Catalog />
			</ul>
			<div className={styles.products_container}>
				<div className={styles.sort_container}>
					<h2>{catrgory}</h2>
					<p className={styles.p_sort} onClick={() => setIsSort(!isSort)}>
						<i className="fa fa-sort-amount-desc" aria-hidden="true" />
					</p>
				</div>
				{!!products.length ? (
					<ul className={styles.products_list}>
						<Products products={products} />
					</ul>
				) : (
					<div className={styles.loader_container}>
						<Loader />
					</div>
				)}
			</div>
		</>
	);
};
