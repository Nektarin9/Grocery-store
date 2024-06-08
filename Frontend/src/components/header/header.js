import { useDispatch, useSelector } from 'react-redux';
import { selectStatusEditing, selectStatusProduct } from '../../selectors';
import { Logo, ControlPanel, SearchLine } from './components';
import { actionGetStatusEditing } from '../../action';
import { useEffect } from 'react';
import styles from './header.module.css';

export const Header = () => {
	const statusProduct = useSelector(selectStatusProduct);
	const statusEditing = useSelector(selectStatusEditing);
	const dispatch = useDispatch();

	useEffect(() => {
		if (statusEditing) {
			setTimeout(() => {
				dispatch(actionGetStatusEditing(false));
			}, 2000);
		}
	}, [dispatch, statusEditing]);

	return (
		<header className={styles.headerConteiner}>
			<div className={styles.headerContent}>
				<Logo />
				<SearchLine />
				<ControlPanel />

				{statusEditing && (
					<div className={styles.statusContainer}>{statusProduct}</div>
				)}
			</div>
		</header>
	);
};
