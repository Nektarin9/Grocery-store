import { useNavigate } from 'react-router-dom';
import styles from './backButton.module.css';
export const BackButton = () => {
	const navigate = useNavigate()
	return (
		<span className={styles.icon_back} onClick={() => navigate(-1)}>
			<i className="fa fa-angle-left" aria-hidden="true"></i>
		</span>
	);
};
