import styles from "./button.module.css"

export const Button = ({children, onClick}) => {
	return (
		<button onClick={onClick} className={styles.button}>{children}</button>
	)
}
