import { BackButton, Loader, InputEdit, Button } from '../../components';
import { selectAllProducts, selectAllСategories } from '../../selectors';
import { actionGetСatalogСategories } from '../../action';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { findProduct } from '../../utils';
import { InputBlockCharacteristics } from './components/input-block-characteristics/input-block-characteristics';
import { useState, useEffect } from 'react';
import styles from './edit.module.css';
import { updateProduct } from '../../bff/api';

export const Edit = () => {
	const { product_id } = useParams();
	const allProducts = useSelector(selectAllProducts);
	const allСategories = useSelector(selectAllСategories);
	const product = findProduct(allProducts, product_id);

	const [changeCategory, setСhangeCategory] = useState();
	const [changeTitle, setСhangeTitle] = useState();
	const [changeInputUrl, setСhangeInputUrl] = useState();
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
		dispatch(actionGetСatalogСategories());
		setСhangeCategory(product?.category);
		setСhangeTitle(product?.title);
		setСhangeInputUrl(product?.imageUrl);
		setСhangeContent(product?.content);
		setСhangePrice(product?.priсe);
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
		console.log(data)
		/*тут нужно диспатчить*/
		updateProduct(product_id, data)
	};
	const deleteProduct = () => {
		console.log(4)
	}
	return (
		<>
			<BackButton />
			{product?.id ? (
				<div className={styles.container}>
					<h3>Категория</h3>
					<select
						value={changeCategory}
						onChange={({ target }) => setСhangeCategory(target.value)}
						className={styles.select_category}
						name="select"
					>
						{allСategories.map(({ category }) => (
							<option
								key={category}
								value={category}
								className={styles.option}
							>
								{category}
							</option>
						))}
					</select>
					<div className={styles.container_input}>
						<h3>Название товара</h3>
						<InputEdit
							value={changeTitle}
							setValue={setСhangeTitle}
							width={'600px'}
							placeholder="Имя"
						/>
					</div>
					<h3>Image url</h3>
					<InputEdit
						value={changeInputUrl}
						setValue={setСhangeInputUrl}
						width={'600px'}
						placeholder="Image url"
					/>
					<h3>О товаре</h3>
					<textarea
						className={styles.content}
						name="content"
						onChange={({ target }) => {
							setСhangeContent(target.value);
						}}
						value={changeContent ? changeContent : ''}
						placeholder="О товаре..."
					></textarea>
					<div className={styles.container_characteristics}>
						<InputBlockCharacteristics
							value={changePrice}
							setValue={setСhangePrice}
							width={'100px'}
							placeholder="руб"
							text={'Цена 1 шт (руб)'}
						/>
						<InputBlockCharacteristics
							value={changeQuantity}
							setValue={setСhangeQuantity}
							width={'50px'}
							placeholder="шт"
							text={'Количество (шт)'}
						/>
						<InputBlockCharacteristics
							value={changeProtein}
							setValue={setСhangeProtein}
							width={'50px'}
							placeholder="г"
							text={'Протеины (г)'}
						/>
						<InputBlockCharacteristics
							value={changeFats}
							setValue={setСhangeFats}
							width={'50px'}
							placeholder="г"
							text={'Жиры (г)'}
						/>
						<InputBlockCharacteristics
							value={changeCarbohydrates}
							setValue={setСhangeCarbohydrates}
							width={'50px'}
							placeholder="г"
							text={'Углеводы (г)'}
						/>
						<InputBlockCharacteristics
							value={changeCalorie}
							setValue={setСhangeCalorie}
							width={'80px'}
							placeholder="ккал"
							text={'Калорий (ккал)'}
						/>
						<InputBlockCharacteristics
							value={changeGrams}
							setValue={setСhangeGrams}
							width={'80px'}
							placeholder="г"
							text={'Масса (г)'}
						/>
					</div>
					<div className={styles.btn_container}>
						<Button onClick={saveProduct}>Изменить товар</Button>
						<Button onClick={deleteProduct}>Удалить товар</Button>
					</div>
				</div>
			) : (
				<div className={styles.loader_container}>
					<Loader />
				</div>
			)}
		</>
	);
};
