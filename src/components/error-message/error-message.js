import styles from './errorMessage.module.css';
export const ErrorMessage = ({children}) => {
	return (
		<div className={styles.container}>{children}</div>
	)
};
