
import { InputEdit } from '../../../components';
import { InputBlockCharacteristics } from './components';
import { SelectCategories } from '../../../components';
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


	return (
		<div className={styles.container}>
			<h3>Категория</h3>
			<SelectCategories changeCategory={changeCategory} setСhangeCategory={setСhangeCategory}/>

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
					text={'Белки (г)'}
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
