import { useEffect, useState } from 'react';
import { EditFields } from '../components/edit-fields/edit-fields';
import { BackButton, Button } from '../../components';
import {
	actionAddProduct,
	actionGetStatusEditing,
	actionGetСatalogСategories,
	actionUpdateStatusProduct,
} from '../../action';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './addition.module.css';
import { selectAllСategories } from '../../selectors';

export const Addition = () => {
	const allCategories = useSelector(selectAllСategories);
	const [changeCategory, setСhangeCategory] = useState('');
	const [changeTitle, setСhangeTitle] = useState('');
	const [changeInputUrl, setСhangeInputUrl] = useState('');
	const [changeContent, setСhangeContent] = useState('');
	const [changePrice, setСhangePrice] = useState('');
	const [changeQuantity, setСhangeQuantity] = useState('');
	const [changeProtein, setСhangeProtein] = useState('');
	const [changeFats, setСhangeFats] = useState('');
	const [changeCarbohydrates, setСhangeCarbohydrates] = useState('');
	const [changeCalorie, setСhangeCalorie] = useState('');
	const [changeGrams, setСhangeGrams] = useState('');

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(actionGetСatalogСategories());
	}, [dispatch]);

	useEffect(() => {
		setСhangeCategory(allCategories[0]?.category);
	}, [dispatch, allCategories]);

	const addProduct = () => {
		const data = {
			changeCategory,
			changeTitle,
			changeInputUrl,
			changeContent,
			changePrice,
			changeQuantity,
			changeProtein,
			changeFats,
			changeCarbohydrates,
			changeCalorie,
			changeGrams,
		};
		dispatch(actionAddProduct(data));
		navigate('/');
		dispatch(actionUpdateStatusProduct('Товар успешно добавлен'));
		dispatch(actionGetStatusEditing(true));
	};

	return (
		<>
			<BackButton />
			<EditFields
				changeCategory={changeCategory}
				setСhangeCategory={setСhangeCategory}
				changeTitle={changeTitle}
				setСhangeTitle={setСhangeTitle}
				changeInputUrl={changeInputUrl}
				setСhangeInputUrl={setСhangeInputUrl}
				changeContent={changeContent}
				setСhangeContent={setСhangeContent}
				changePrice={changePrice}
				setСhangePrice={setСhangePrice}
				changeQuantity={changeQuantity}
				setСhangeQuantity={setСhangeQuantity}
				changeProtein={changeProtein}
				setСhangeProtein={setСhangeProtein}
				changeFats={changeFats}
				setСhangeFats={setСhangeFats}
				changeCarbohydrates={changeCarbohydrates}
				setСhangeCarbohydrates={setСhangeCarbohydrates}
				changeCalorie={changeCalorie}
				setСhangeCalorie={setСhangeCalorie}
				changeGrams={changeGrams}
				setСhangeGrams={setСhangeGrams}
			/>
			<div className={styles.btn_container}>
				<Button onClick={addProduct}>Добавить</Button>
			</div>
		</>
	);
};
