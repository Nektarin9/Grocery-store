import { NavLink } from 'react-router-dom';
import styles from './basketIcon.module.css';

export const BasketIcon = () => {
	return (
		<NavLink className={styles.contanet_icon} to={'/basket'}>
			<span className={styles.cart_counter}>99</span>
			<i className="fa fa-shopping-basket" aria-hidden="true"></i>
		</NavLink>
	);
};
