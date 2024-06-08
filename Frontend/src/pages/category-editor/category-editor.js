import { useState } from 'react';
import {
	BackButton,
	Button,
	InputEdit,
	SelectCategories,
	ErrorMessage,
} from '../../components';
import {
	actionGetStatusEditing,
	actionUpdateStatusProduct,
	actionAddCategory,
	actionDeleteCategory,
} from '../../action';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './categoryEditor.module.css';
import { selectAllСategories } from '../../selectors';

export const CategoryEditor = () => {
	const [nameCategory, setNameCategory] = useState('');
	const [urlImg, setUrlImg] = useState('');
	const [changeCategory, setСhangeCategory] = useState('');

	const [errorMessage, setErrorMessage] = useState(false);
	const allСategories = useSelector(selectAllСategories);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const addCategory = () => {
		const data = {
			nameCategory,
			urlImg,
		};

		let repetitions = false;
		let conter = 0;
		allСategories.forEach(({ category }) => {
			if (category === nameCategory) {
				conter = conter + 1;
			}
			if (conter >= 1) {
				repetitions = true;
			}
		});

		if (urlImg && nameCategory && !repetitions) {
			dispatch(actionAddCategory(data));
			dispatch(actionUpdateStatusProduct('Каталог успешно обновлен'));
			navigate('/');
			dispatch(actionGetStatusEditing(true));
		}
		else {
			setErrorMessage(true)
		}
	};
	const deleteCategory = () => {
		let idCategory;
		allСategories.forEach(({ category, id }) => {
			if (category === changeCategory) {
				idCategory = id;
			}
		});

		if (changeCategory) {
			dispatch(actionDeleteCategory(idCategory));
			dispatch(actionUpdateStatusProduct('Каталог успешно удален'));
			navigate('/');
			dispatch(actionGetStatusEditing(true));
		}
	};

	return (
		<>
			<BackButton />
			<div className={styles.container}>
				{errorMessage && (
					<div className={styles.message}>
						<ErrorMessage>
							Поля должны быть заполнены, категории не могут повторяться
						</ErrorMessage>
					</div>
				)}
				<InputEdit
					value={urlImg}
					setValue={setUrlImg}
					placeholder={'URL image 50x50'}
				/>
				<InputEdit
					value={nameCategory}
					setValue={setNameCategory}
					placeholder={'Название категории'}
				/>
				<Button onClick={addCategory}>Добавить категорию</Button>
			</div>

			<div className={styles.container}>
				<SelectCategories
					changeCategory={changeCategory}
					setСhangeCategory={setСhangeCategory}
				/>
				<Button onClick={deleteCategory}>Удалить категорию</Button>
			</div>
		</>
	);
};
