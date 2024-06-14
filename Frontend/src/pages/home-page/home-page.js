import { Catalog, Products } from './components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectGetCategory,
	selectAllProducts,
	selectUser,
} from '../../selectors';
import {
	actionGetСatalogСategories,
	actionClearProduct,
	actionSort,
} from '../../action';
import { NavLink } from 'react-router-dom';
import styles from './homePage.module.css';
import { accessCheck } from '../../utils/access-check';

export const HomePage = () => {
	const catrgory = useSelector(selectGetCategory);
	const allProducts = useSelector(selectAllProducts);
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(actionGetСatalogСategories());
		dispatch(actionClearProduct());
	}, [dispatch, catrgory]);

	/*Поиск*/

	const sort = () => {
		dispatch(actionSort());
	};

	return (
		<>
			<ul className={styles.catalog}>
				<div className={styles.flex_catalog}>
					<h2 className={styles.h2_catalog}>Каталог</h2>
					{accessCheck(user, 'ADMIN') ? (
						<NavLink to={'/editing-category'}>
							<i
								className="fa fa-pencil-square-o fa-2x"
								aria-hidden="true"
							></i>
						</NavLink>
					) : (
						<></>
					)}
				</div>
				<Catalog />
			</ul>
			<div className={styles.products_container}>
				<div className={styles.sort_container}>
					<h2>{catrgory ? catrgory : "Все продукты"}</h2>
					<p
						className={styles.p_sort}
						onClick={() => {
							sort();
						}}
					>
						<i className="fa fa-sort-amount-desc" aria-hidden="true" />
					</p>
				</div>
				<ul className={styles.products_list}>
					<Products allProducts={allProducts} />
				</ul>
			</div>
		</>
	);
};
