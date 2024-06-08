import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAddProducts } from '../../../../selectors';
import styles from './basketIcon.module.css';

export const BasketIcon = () => {
	const productsBasket = useSelector(selectAddProducts);

	return (
		<NavLink className={styles.contanet_icon} to={'/basket'}>
			{productsBasket.length !== 0 && (
				<span className={styles.cart_counter}>{productsBasket.length}</span>
			)}
			<i className="fa fa-shopping-basket" aria-hidden="true"></i>
		</NavLink>
	);
};
