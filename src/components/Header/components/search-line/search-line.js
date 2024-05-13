import { useDispatch } from 'react-redux';
import { actionGetInputSearch } from '../../../../action';
import { useSelector } from 'react-redux';
import { selectGetCategory, selectProductSearch } from '../../../../selectors';
import { useEffect } from 'react';
import styles from './searchLine.module.css';

export const SearchLine = () => {
	const dispatch = useDispatch();
	const selectCategory = useSelector(selectGetCategory);
	const inputSearch = useSelector(selectProductSearch);

	/* Записываем текст фильтра */
	const productSearch = (event) => {
		const { target } = event;
		if (target.value) {
			dispatch(actionGetInputSearch(target.value));
		} else {
			dispatch(actionGetInputSearch(''));
		}
	};

	useEffect(() => {
		dispatch(actionGetInputSearch(''));
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
