import { ProductСatalog, Products } from '../index';
import { useSelector } from 'react-redux';
import { selectGetCategory } from '../../redux/selectors';
import styles from './homePage.module.css';

export const HomePage = () => {
	const catrgory = useSelector(selectGetCategory);

	return (
		<>
			<ul className={styles.catalog}>
				<h2 className={styles.h2_catalog}>Каталог</h2>
				<ProductСatalog />
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
