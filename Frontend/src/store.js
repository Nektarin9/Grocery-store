import { legacy_createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { catalogReducer, userReducer, appReducer, basketReducer } from './reducers/index';

const reducer = combineReducers({
	catalogReducer: catalogReducer,
	userReducer: userReducer,
	appReducer: appReducer,
	basketReducer: basketReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
	reducer,
	composeEnhancers(applyMiddleware(thunk)),
);
