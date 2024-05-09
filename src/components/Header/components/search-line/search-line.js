import { useDispatch } from 'react-redux';
import { getInputSearch } from '../../../../action';
import { useSelector } from 'react-redux';
import { selectGetCategory, getProductSearch } from '../../../../selectors';
import { useEffect } from 'react';
import styles from './searchLine.module.css';

export const SearchLine = () => {
	const dispatch = useDispatch();
	const selectCategory = useSelector(selectGetCategory);
	const inputSearch = useSelector(getProductSearch);

	/* Записываем текст фильтра */
	const productSearch = (event) => {
		const { target } = event;
		if (target.value) {
			dispatch(getInputSearch(target.value));
		} else {
			dispatch(getInputSearch(''));
		}
	};

	useEffect(() => {
		dispatch(getInputSearch(''));
	}, [selectCategory, dispatch]);

	return (
		<div className={styles.searchContainer}>
			<input
				onChange={productSearch}
				className={styles.search}
				value={inputSearch}
				type="text"
				placeholder="Начните поиск"
				maxLength={35}
			></input>
			<button className={styles.searchIcon}>
				<i className={`fa fa-neuter`} aria-hidden="true"></i>
			</button>
		</div>
	);
};
