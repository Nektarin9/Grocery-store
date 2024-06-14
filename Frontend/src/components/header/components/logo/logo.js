import { Link } from 'react-router-dom';
import { actionBtnSearch, actionGetInputSearch, actionSetCategory } from '../../../../action';
import { useDispatch } from 'react-redux';
import styles from './logo.module.css';

export const Logo = () => {
	const dispatch = useDispatch();
	return (
		<Link to={'/'}>
			<div
				className={styles.logoContainer}
				onClick={() => {
					dispatch(actionGetInputSearch(''))
					dispatch(actionSetCategory(''))
					dispatch(actionBtnSearch())
				}}
			>
				<img
					className={styles.logo}
					alt="LOVE FOOD"
					src="https://i.postimg.cc/6QmfsCZh/love-food-logo-design-illustration-92167-277-p-Blhc-Lbse-transformed.png"
				></img>
				<p className={styles.logoName}>
					LOVE
					<br />
					FOOD
				</p>
			</div>
		</Link>
	);
};
