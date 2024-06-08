import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectAllСategories } from '../../selectors';
import { actionGetСatalogСategories } from '../../action';
import styles from './selectCategories.module.css';

export const SelectCategories = ({
	changeCategory,
	setСhangeCategory,
}) => {
	const allСategories = useSelector(selectAllСategories);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(actionGetСatalogСategories());
	}, [dispatch]);
	return (
		<select
			value={changeCategory}
			onChange={({ target }) => setСhangeCategory(target.value)}
			className={styles.select_category}
			name="select"
		>
			{allСategories.map(({ category, id }) => (
				<option key={id} value={category} className={styles.option}>
					{category}
				</option>
			))}
		</select>
	);
};
