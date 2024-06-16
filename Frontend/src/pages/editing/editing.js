import { BackButton, Loader, Button } from '../../components';
import { selectLoadingProducts } from '../../selectors';
import { EditFields } from '../components/edit-fields/edit-fields';
import {
	actionDeleteProduct,
	actionGetStatusEditing,
	actionUpdateProduct,
	actionUpdateStatusProduct,
} from '../../action';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { findProduct } from '../../utils';
import { useState, useEffect } from 'react';
import styles from './editing.module.css';

export const Editing = () => {
	const { product_id } = useParams();
	const navigate = useNavigate();

	const allProducts = useSelector(selectLoadingProducts);
	const product = findProduct(allProducts, product_id);


	const [changeCategory, setСhangeCategory] = useState();
	const [changeTitle, setСhangeTitle] = useState();
	const [changeInputUrl, setСhangeInputUrl] = useState([]);
	const [changeContent, setСhangeContent] = useState();
	const [changePrice, setСhangePrice] = useState();
	const [changeQuantity, setСhangeQuantity] = useState();
	const [changeProtein, setСhangeProtein] = useState();
	const [changeFats, setСhangeFats] = useState();
	const [changeCarbohydrates, setСhangeCarbohydrates] = useState();
	const [changeCalorie, setСhangeCalorie] = useState();
	const [changeGrams, setСhangeGrams] = useState();
	const dispatch = useDispatch();

	useEffect(() => {
		setСhangeCategory(product?.category);
		setСhangeTitle(product?.title);
		setСhangeInputUrl(product?.imageUrl);
		setСhangeContent(product?.content);
		setСhangePrice(product?.price);
		setСhangeQuantity(product?.quantity);
		setСhangeProtein(product?.protein);
		setСhangeFats(product?.fats);
		setСhangeCarbohydrates(product?.carbohydrates);
		setСhangeCalorie(product?.calorie);
		setСhangeGrams(product?.numberGrams);
	}, [dispatch, product]);

	const saveProduct = () => {
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
		dispatch(actionUpdateProduct(product_id, data));
		navigate('/');
		dispatch(actionUpdateStatusProduct('Товар успешно изменен'));
		dispatch(actionGetStatusEditing(true));
	};
	const deleteProduct = () => {
		dispatch(actionDeleteProduct(product_id));
		navigate('/');
		dispatch(actionUpdateStatusProduct('Товар успешно удален'));
		dispatch(actionGetStatusEditing(true));
	};
	return (
		<>
			<BackButton />
			{product?.id ? (
				<>
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
						<Button onClick={saveProduct}>Изменить товар</Button>
						<Button onClick={deleteProduct}>Удалить товар</Button>
					</div>
				</>
			) : (
				<div className={styles.loader_container}>
					<Loader />
				</div>
			)}
		</>
	);
};
