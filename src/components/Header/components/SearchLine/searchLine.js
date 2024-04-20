import styles from './searchLine.module.css';

export const SearchLine = () => {
	return (
		<div className={styles.searchContainer}>
			<input
				className={styles.search}
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
