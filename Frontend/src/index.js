import React from 'react';
import ReactDOM from 'react-dom/client';
import { GroceryStore } from './grocery-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<GroceryStore />
		</BrowserRouter>
	</Provider>,
);
