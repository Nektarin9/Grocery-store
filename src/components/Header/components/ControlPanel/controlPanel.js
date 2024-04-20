import { Link } from 'react-router-dom';
import styles from './controlPanel.module.css';

export const ControlPanel = () => {
	return (
		<div className={styles.controlPanelContainer}>
			<div className={styles.rightAligned}>
				<Link className={styles.menu} to={'/'}>
					<h2 className={styles.menu_text}>Все товары</h2>
				</Link>
			</div>
			<div className={styles.rightAligned}>
				<Link to={'/login'}>
					<button className={styles.login}>
						<i
							className={`fa fa-user-o ${styles.login_icon}`}
							aria-hidden="true"
						></i>
						Войти
					</button>
				</Link>
			</div>
		</div>
	);
};
