import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputEdit } from '../../../components';
import { InputBlockCharacteristics } from './components';
import { selectAllСategories } from '../../../selectors';
import { actionGetСatalogСategories } from '../../../action';
import styles from './edit-fields.module.css';
export const EditFields = ({
	changeCategory,
	setСhangeCategory,
	changeTitle,
	setСhangeTitle,
	changeInputUrl,
	setСhangeInputUrl,
	changeContent,
	setСhangeContent,
	changePrice,
	setСhangePrice,
	changeQuantity,
	setСhangeQuantity,
	changeProtein,
	setСhangeProtein,
	changeFats,
	setСhangeFats,
	changeCarbohydrates,
	setСhangeCarbohydrates,
	changeCalorie,
	setСhangeCalorie,
	changeGrams,
	setСhangeGrams,
}) => {
	const allСategories = useSelector(selectAllСategories);
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(actionGetСatalogСategories());

	}, [dispatch, allСategories])


	return (
		<div className={styles.container}>
			<h3>Категория</h3>
			<select
				value={changeCategory}
				onChange={({ target }) => setСhangeCategory(target.value)}
				className={styles.select_category}
				name="select"
			>
				{allСategories.map(({ category }) => (
					<option key={category} value={category} className={styles.option}>
						{category}
					</option>
				))}
			</select>
			<h3>Название товара</h3>
			<InputEdit
				value={changeTitle}
				setValue={setСhangeTitle}
				width={'600px'}
				placeholder="Имя"
			/>
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
		</div>
	);
};
