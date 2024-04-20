import { Link } from 'react-router-dom';
import styles from './logo.module.css';
export const Logo = () => (
	<Link to={'/'}>
		<div className={styles.logoContainer}>
			<img
				className={styles.logo}
				alt='LOVE FOOD'
				src="https://ltdfoto.ru/images/2024/04/19/love-food-logo-design-illustration_92167-277-pBlhcLbse-transformed.png"
			></img>
			<p className={styles.logoName}>LOVE<br/>FOOD</p>
		</div>
	</Link>
);
