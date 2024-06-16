import { Button, InputEdit } from '../../../components';
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
	const addInput = () => {
		setСhangeInputUrl([...changeInputUrl, '']); // Добавляем пустую строку в массив
	};
	// Функция для обработки изменения значения инпута
	const handleInputChange = (index, value) => {
		const newValues = [...changeInputUrl];
		newValues[index] = value;
		setСhangeInputUrl(newValues);
	};




	return (
		<div className={styles.container}>
			<h3>Категория</h3>
			<SelectCategories
				changeCategory={changeCategory}
				setСhangeCategory={setСhangeCategory}
			/>

			<h3>Название товара</h3>
			<InputEdit
				value={changeTitle}
				setValue={setСhangeTitle}
				width={'600px'}
				placeholder="Имя"
			/>
			<h3>Image url</h3>
			<Button onClick={addInput}>Добавить url</Button>
			<div>
				{changeInputUrl.map((value, index) => (
					<div key={index}>
						<p>№ {index + 1}</p>
						<InputEdit
							value={value}
							width={'600px'}
							btnDelete={true}
							onChange={(e) => handleInputChange(index, e.target.value)}
						/>
					</div>
				))}

			</div>

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
