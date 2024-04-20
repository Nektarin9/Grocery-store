import { getAllProducts } from '../../../redux/selectors';
import { useSelector } from 'react-redux';

import styles from './products.module.css';

export const Products = () => {
	const allProducts = useSelector(getAllProducts);
	return (
		<>
			{allProducts.map(
				({ id, category, image_url, priсe, title, number_grams }) => {
					return (
						<li
							key={id}
							id={id}
							className={`${styles.products} ${styles.scale}`}
						>
							<img
								className={`${styles.img_products} ${styles.scale}`}
								src={image_url}
								alt={title}
							></img>
							<p className={styles.price}>{`${priсe} ₽`}</p>
							<p className={styles.nameProduct}>{title}</p>
							<p className={styles.text_gram}>{number_grams}</p>
							<button className={styles.buyButton}>+</button>
						</li>
					);
				},
			)}
			</>
	);
};
