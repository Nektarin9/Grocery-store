import { Catalog, Products } from './components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectGetCategory } from '../../selectors';
import { getСatalogСategories } from '../../action';
import styles from './homePage.module.css';

export const HomePage = () => {
	const catrgory = useSelector(selectGetCategory);
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getСatalogСategories());
	}, [dispatch]);


	return (
		<>
			<ul className={styles.catalog}>
				<h2 className={styles.h2_catalog}>Каталог</h2>
				<Catalog />
			</ul>
			<div className={styles.products_container}>
				<h2>{catrgory}</h2>
				<ul className={styles.products_list}>
					<Products />
				</ul>
			</div>
		</>
	);
};
