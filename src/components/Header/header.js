import { Logo, ControlPanel, SearchLine } from './components';
import styles from './header.module.css';

export const Header = () => (
	<header className={styles.headerConteiner}>
		<div className={styles.headerContent}>
			<Logo />
			<SearchLine/>
			<ControlPanel />
		</div>
	</header>
);


