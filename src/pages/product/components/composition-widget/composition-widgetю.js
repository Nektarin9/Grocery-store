import styles from './compositionWidget.module.css';
export const CompositionWidget = ({ product }) => {
	return (
		<div className={styles.compound_container}>
			<ul className={styles.ul_compound}>
				<li className={styles.li_compound}>
					{product.protein}
					<p className={styles.p_compound}>белки</p>
				</li>
				<li className={styles.li_compound}>
					{product.fats}
					<p className={styles.p_compound}>жиры</p>
				</li>
				<li className={styles.li_compound}>
					{product.cards}
					<p className={styles.p_compound}>углеводы</p>
				</li>
				<li className={styles.li_compound}>
					{product.calorie}
					<p className={styles.p_compound}>ккал</p>
				</li>
			</ul>
		</div>
	);
};
