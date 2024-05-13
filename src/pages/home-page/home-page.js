import { Catalog, Products } from './components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectGetCategory,
	selectLoadingProducts,
	selectProductSearch,
	selectAllProducts,
} from '../../selectors';
import { actionGetСatalogСategories } from '../../action';
import { producSearch } from '../../utils/product-search/produc-search';
import { useState } from 'react';
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
	}, [dispatch]);

	/*Поиск*/

	const products = producSearch(
		inputSearch,
		allProducts,
		productСatalog,
		selectCategory,
	);

	if (isSort) {
		products.sort((a, b) => a.priсe - b.priсe);
	} else {
		products.sort((a, b) => b.priсe - a.priсe);
	}

	return (
		<>
			<ul className={styles.catalog}>
				<h2 className={styles.h2_catalog}>Каталог</h2>
				<Catalog />
			</ul>
			<div className={styles.products_container}>
				<div className={styles.sort_container}>
					<h2>{catrgory}</h2>
					<p className={styles.p_sort} onClick={() => setIsSort(!isSort)}>
						<i className="fa fa-sort-amount-desc" aria-hidden="true" />
					</p>
				</div>

				<ul className={styles.products_list}>
					<Products products={products} />
				</ul>
			</div>
		</>
	);
};
