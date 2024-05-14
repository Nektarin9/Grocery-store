import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actionSetCategory } from '../../../../action';
import { BasketIcon } from '../basket-icon/basket-icon';
import { Button } from '../../../button/button';
import { CATEGORIES } from '../../../../constants';
import styles from './controlPanel.module.css';

export const ControlPanel = () => {
	const dispatch = useDispatch();
	return (
		<div className={styles.controlPanelContainer}>
			<div className={styles.rightAligned}>
				<Link className={styles.menu} to={'/'}>
					<h2
						className={styles.menu_text}
						onClick={() =>
							dispatch(actionSetCategory(CATEGORIES.allProducts))
						}
					>
						Все товары
					</h2>
				</Link>
			</div>
			<BasketIcon />

			<div className={styles.rightAligned}>
				<Link to={'/login'}>
					<Button>
						<i
							className={`fa fa-user-o ${styles.login_icon}`}
							aria-hidden="true"
						></i>
						Войти
					</Button>
				</Link>
			</div>
		</div>
	);
};
