import React from 'react';
import { useEffect } from 'react';
import { actionFethСatalog, actionFethProducts } from './redux/action';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Header, Footer, HomePage } from './components';
import styles from "./groceryStore.module.css"





export const GroceryStore = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(actionFethСatalog());
		dispatch(actionFethProducts());
	}, []);
	
	return (
		<>
			<div className={styles.appColumn}>
				<Header />
				<div className={styles.content}>
					<Routes>
						<Route path="/" element={<HomePage/>} />
						<Route path="/login" element={<div>Авторизация</div>} />
						<Route path="/register" element={<div>Регистрация</div>} />
						<Route path="/basket" element={<div>Корзина</div>} />
						<Route path="/admin" element={<div>Админ панель</div>} />
						<Route path="/post/:post_id" element={<div>Информация о товаре</div>} />
						<Route path="*" element={<div>Ошибка</div>} />
					</Routes>
				</div>
				<Footer />
			</div>

		</>
	);
};
