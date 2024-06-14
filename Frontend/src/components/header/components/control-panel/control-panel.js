import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	actionBtnSearch,
	actionGetInputSearch,
	actionLogout,
	actionSetCategory,
} from '../../../../action';
import { selectUser } from '../../../../selectors';
import { BasketIcon } from '../basket-icon/basket-icon';
import { Button } from '../../../button/button';
import styles from './controlPanel.module.css';

export const ControlPanel = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const logout = () => {
		dispatch(actionLogout());
		sessionStorage.removeItem('userData');
	};

	return (
		<div className={styles.controlPanelContainer}>
			<div className={styles.rightAligned}>
				<Link className={styles.menu} to={'/'}>
					<h2
						className={styles.menu_text}
						onClick={() => {
							dispatch(actionGetInputSearch(''));
							dispatch(actionSetCategory(''));
							dispatch(actionBtnSearch());
						}}
					>
						Все товары
					</h2>
				</Link>
			</div>
			<BasketIcon />

			<div className={styles.rightAligned}>
				{!user.error ? (
					<div>
						<span className={styles.login}>{user?.user?.login}</span>
						<Button onClick={logout}>Выйти</Button>
					</div>
				) : (
					<Link to={'/login'}>
						<Button>
							<i
								className={`fa fa-user-o ${styles.login_icon}`}
								aria-hidden="true"
							></i>
							Войти
						</Button>
					</Link>
				)}
			</div>
		</div>
	);
};
