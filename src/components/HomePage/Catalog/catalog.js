import { selectGetCategory, getAllСategories } from '../../../redux/selectors';
import { actionGetCategory } from '../../../redux/action';
import { useSelector, useDispatch } from 'react-redux';

import styles from './catalog.module.css';

export const ProductСatalog = () => {
	const dispatch = useDispatch();
	/* Все категории */
	const allСategories = useSelector(getAllСategories);
	/* Выбранная категория */
	const selectCategory = useSelector(selectGetCategory);



	/* Тут дописать логику */
	const selectProduct = (category) => {
		dispatch(actionGetCategory(category));
	};

	return (
		<>
			{allСategories.map(({ category, image_url }) => {
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
			})}
		</>
	);
};
