import { selectGetCategory, selectAllСategories } from '../../../../selectors';
import { actionSetCategory } from '../../../../action';
import { useSelector, useDispatch } from 'react-redux';
import { Loader } from '../../../../components';
import styles from './catalog.module.css';

export const Catalog = () => {
	const dispatch = useDispatch();
	/* Все категории */
	const allСategories = useSelector(selectAllСategories);
	/* Выбранная категория */
	const selectCategory = useSelector(selectGetCategory);

	const selectProduct = (category) => {
		dispatch(actionSetCategory(category));
	};

	return (
		<>
			{!!allСategories.length
				? allСategories.map(({ category, image_url }) => {
						return (
							<li
								onClick={() => selectProduct(category)}
								key={category}
								className={
									selectCategory === category
										? `${styles.catalog_container} ${styles.color_container_category}`
										: styles.catalog_container
								}
							>
								<img
									className={styles.img_catalog}
									src={image_url}
									alt={category}
								></img>
								<p className={styles.text_catalog}>{category}</p>
							</li>
						);
					})
				: <div className={styles.loader_container}><Loader/></div>}
		</>
	);
};
