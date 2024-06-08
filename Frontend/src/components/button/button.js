import styles from "./button.module.css"

export const Button = ({children, onClick, width,  ...props}) => {
	const style = {
		width: `${width}`
	}
	return (
		<button { ...props} style={style} onClick={onClick} className={styles.button}>{children}</button>
	)
}
