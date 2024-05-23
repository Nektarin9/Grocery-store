import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actionGetAllProducts } from './action';
import { Header, Footer } from './components';
import { HomePage, Product, Basket, Edit } from './pages';
import styles from './groceryStore.module.css';

export const GroceryStore = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(actionGetAllProducts());
	}, [dispatch]);

	return (
		<>
			<div className={styles.appColumn}>
				<Header />
				<div className={styles.content}>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/login" element={<div>Авторизация</div>} />
						<Route path="/register" element={<div>Регистрация</div>} />
						<Route path="/basket" element={<Basket />} />
						<Route path="/admin" element={<div>Админ панель</div>} />
						<Route path="/product/:product_id" element={<Product />} />
						<Route
							path="/product/:product_id/edit"
							element={<Edit/>}
						/>
						<Route path="*" element={<div>Ошибка</div>} />
					</Routes>
				</div>
				<Footer />
			</div>
		</>
	);
};
