import { Link } from 'react-router-dom';
import styles from './backButton.module.css';

export const BackButton = () => {
	return (
		<Link to={'/'} className={styles.icon_back}>
			<i className="fa fa-angle-left" aria-hidden="true"></i>
		</Link>
	);
};
