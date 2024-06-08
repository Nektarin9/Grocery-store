import { Link, useNavigate } from 'react-router-dom';
import { BackButton, InputEdit, Button, ErrorMessage } from '../../components';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
	actionAuthorization,
	actionGetStatusEditing,
	actionResetStateRegist,
	actionUpdateStatusProduct,
} from '../../action';
import { selectUser } from '../../selectors';
import styles from './authorization.module.css';

const authFormSchema = yup.object().shape({
	login: yup
		.string()
		.required('Заполните логин')
		.matches(/^\w+$/, 'Неверный логин, допускаются только буквы и цифры')
		.min(3, 'Неверно заполнен логин. Минимум 3 символа')
		.max(15, 'Неверно заполнен логин. Максимум 3 символа'),

	password: yup
		.string()
		.required('Заполните пароль')
		.matches(
			/^[\w#$]+$/,
			'Неверно заполнен пароль. Допускаются буквы, цифры и знаки #, %',
		)
		.min(6, 'Неверно заполнен пароль. Минимум 6 символа')
		.max(30, 'Неверно заполнен пароль. Минимум 30 символа'),
});
export const Authorization = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(authFormSchema),
	});
	const [serverError, setServerError] = useState('');
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector(selectUser);

	useEffect(() => {
		if (!user.error) {
			navigate('/');
			dispatch(actionUpdateStatusProduct(`Добро пожаловать ${user.user.login}`));
			dispatch(actionGetStatusEditing(true));
			sessionStorage.setItem("userData", JSON.stringify(user))

		}
	}, [dispatch, navigate, user, user.error, user?.user?.login]);

	const onSubmit = ({ login, password }) => {
		dispatch(actionAuthorization(login, password));
	};
	const formError = errors?.login?.message || errors?.password?.message;

	const errorMessage = formError || serverError;

	useEffect(() => {
		dispatch(actionResetStateRegist(true));
	}, [dispatch]);

	return (
		<>
			{user.error === "Проверьте учетые данные" ? <div className={styles.error}><ErrorMessage>{user.error}</ErrorMessage></div> : <></>}
			<BackButton />
			<form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
				<h2 className={styles.h2_text}>Вход и регистрация</h2>
				{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

				<div className={styles.input_container}>
					<InputEdit
						placeholder={'Имя'}
						type="text"
						authorization={true}
						{...register('login', { onChange: () => setServerError(null) })}
					/>
				</div>
				<div className={styles.margin_bottom}>
					<InputEdit
						placeholder={'Пароль'}
						type="password"
						authorization={true}
						{...register('password', {
							onChange: () => setServerError(null),
						})}
					/>
				</div>
				<div className={styles.input_container}>
					<Button type="submit" disabled={!!formError} width={'200px'}>
						Войти
					</Button>
				</div>
				<Link to={'/register'} className={styles.input_container}>
					<Button width={'200px'}>Регистрация</Button>
				</Link>
			</form>
		</>
	);
};
