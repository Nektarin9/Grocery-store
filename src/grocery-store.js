import React from 'react';

import { NavLink, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actionGetAllProducts } from './action';
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
						<Route path="/login" element={<Authorization />} />
						<Route path="/register" element={<Registration />} />
						<Route path="/basket" element={<Basket />} />
						<Route path="/admin" element={<div>Админ панель</div>} />
						<Route path="/product/:product_id" element={<Product />} />
						<Route path="/product/:product_id/edit" element={<Editing />} />
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
