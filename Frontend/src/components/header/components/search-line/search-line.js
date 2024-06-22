import { useDispatch } from 'react-redux';
import {
	actionBtnSearch,
	actionGetInputSearch,
} from '../../../../action';
import { useSelector } from 'react-redux';
import { selectProductSearch } from '../../../../selectors';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { debounce } from './utils';
import styles from './searchLine.module.css';

export const SearchLine = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const inputSearch = useSelector(selectProductSearch);

	const debouncedOnChange = useCallback(
		debounce(() => {
			// Здесь может быть любой код, который вы хотите выполнить с задержкой
			dispatch(actionBtnSearch());
		}, 500),
		[],
	);

	const handleSubmit = (e) => {
		e.preventDefault(); // Предотвращаем стандартное поведение формы
		// Здесь ваш код для обработки отправки формы
		navigate('/');
	};


	return (
		<form className={styles.searchContainer} onSubmit={handleSubmit}>
			<input
				onChange={(e) => {
					debouncedOnChange(e.target.value);
					dispatch(actionGetInputSearch(e.target.value));
				}}
				value={inputSearch}
				className={styles.search}
				type="text"
				placeholder="Начните поиск"
				maxLength={35}
			></input>
			<button type="submit" className={styles.searchIcon}>
				<i className={`fa fa-neuter`} aria-hidden="true"></i>
			</button>
		</form>
	);
};
