import React, { useLayoutEffect } from 'react';

import { NavLink, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionAuthorization, actionGetAllProducts, actionSaveUser } from './action';
import { Header, Footer } from './components';
import {
	HomePage,
	Product,
	Basket,
	Editing,
	Addition,
	CategoryEditor,
	Authorization,
	Registration,
} from './pages';
import styles from './groceryStore.module.css';
import { selectUser } from './selectors';
import { ROLE } from './constants';

export const GroceryStore = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectUser)
	useEffect(() => {
		dispatch(actionGetAllProducts());
	}, [dispatch]);
	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData');
		if (!currentUserDataJSON) {
			return;
		}
		const currentUserData = JSON.parse(currentUserDataJSON);
		dispatch(actionSaveUser({ ...currentUserData }));
	}, [dispatch]);

	return (
		<>
			<div className={styles.appColumn}>
				<Header />
				<div className={styles.content}>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/login" element={<Authorization />} />
						<Route path="/register" element={<Registration />} />
						<Route path="/basket" element={<Basket />} />
						<Route path="/admin" element={<div>Админ панель</div>} />
						<Route path="/product/:product_id" element={<Product />} />
						<Route path="/product/:product_id/edit" element={user?.user?.roleId === ROLE.ADMIN ? <Editing /> : <div>Ошибка</div>} />
						<Route path="/add" element={<Addition />} />
						<Route path="/editing-category" element={<CategoryEditor />} />
						<Route path="*" element={<div>Ошибка</div>} />
					</Routes>
					<NavLink to={'/add'} className={styles.addProduct}>
						<i className="fa fa-plus-circle  fa-4x" aria-hidden="true"></i>
					</NavLink>
				</div>
				<Footer />
			</div>
		</>
	);
};
