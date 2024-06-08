import { BackButton } from "../../components"
import styles from "./errorPage.module.css"
export const ErrorPage = () => {
	return (
		<>
		<BackButton />
		<div className={styles.conteainer}>
			<h1 className={styles.error_h1}>404</h1>
			<p className={styles.error_text}>Упс, похоже такой страницы не существует :(</p>
		</div>
		</>
	)
}
