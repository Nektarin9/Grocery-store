/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useLayoutEffect } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actionAddProductsBasket, actionSaveUser } from './action';
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
	ErrorPage,
} from './pages';
import styles from './groceryStore.module.css';
import { selectAddProducts, selectUser } from './selectors';
import { accessCheck } from './utils/access-check';

export const GroceryStore = () => {
	const productsBasket = useSelector(selectAddProducts);
	const dispatch = useDispatch();
	const user = useSelector(selectUser);

	const savedLocalStorageBasket = JSON.parse(localStorage.getItem('productsBasket'));

	useLayoutEffect(() => {
		dispatch(
			actionAddProductsBasket(
				savedLocalStorageBasket ? savedLocalStorageBasket : [],
			),
		);
		const currentUserDataJSON = sessionStorage.getItem('userData');
		if (!currentUserDataJSON) {
			return;
		}
		const currentUserData = JSON.parse(currentUserDataJSON);
		dispatch(actionSaveUser({ ...currentUserData }));
	}, [dispatch]);

	useEffect(() => {
		localStorage.setItem('productsBasket', JSON.stringify(productsBasket));
	}, [productsBasket]);

	return (
		<>
			<div className={styles.appColumn}>
				<Header />
				<div className={styles.content}>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/login" element={<Authorization />} />
						<Route
							path="/register"
							element={
								accessCheck(user, 'AUTHORRIZED') ? (
									<Registration />
								) : (
									<ErrorPage />
								)
							}
						/>
						<Route path="/basket" element={<Basket />} />
						<Route path="/admin" element={<div>Админ панель</div>} />
						<Route path="/product/:product_id" element={<Product />} />
						<Route
							path="/product/:product_id/edit"
							element={
								accessCheck(user, 'ADMIN') ? <Editing /> : <ErrorPage />
							}
						/>
						<Route
							path="/add"
							element={
								accessCheck(user, 'ADMIN') ? <Addition /> : <ErrorPage />
							}
						/>
						<Route
							path="/editing-category"
							element={
								accessCheck(user, 'ADMIN') ? (
									<CategoryEditor />
								) : (
									<ErrorPage />
								)
							}
						/>
						<Route path="*" element={<ErrorPage />} />
					</Routes>
					{accessCheck(user, 'ADMIN') ? (
						<NavLink to={'/add'} className={styles.addProduct}>
							<i
								className="fa fa-plus-circle  fa-4x"
								aria-hidden="true"
							></i>
						</NavLink>
					) : (
						<></>
					)}
				</div>
				<Footer />
			</div>
		</>
	);
};
