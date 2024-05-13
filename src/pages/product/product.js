import { useDispatch, useSelector } from 'react-redux';
import { selectProduct } from '../../selectors';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { actionGetProduct } from '../../action/get-product';
import { Loader, BackButton } from '../../components';
import styles from './product.module.css';

export const Product = () => {
	const { product_id } = useParams();
	const product = useSelector(selectProduct);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(actionGetProduct(product_id));
	}, [dispatch, product_id]);
	console.log(product);
	return (
		<>
			<BackButton />
			{product ? (
				<>
					<div className={styles.container}>
						<div className={styles.left_container}>
							<img src={product.imageUrl} alt={product.title}></img>
							<h3>О товаре</h3>
							<p className={styles.p_gram}>{product.numberGrams}</p>
							<div className={styles.text_content}>{product.content}</div>
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
						</div>
						<div className={styles.right_container}>
							<h2>{product.title}</h2>
						</div>
					</div>
				</>
			) : (
				<div className={styles.loader_container}>
					<Loader />
				</div>
			)}
		</>
	);
};
