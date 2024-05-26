import { Link } from 'react-router-dom';
import { BackButton, InputEdit, Button, ErrorMessage } from '../../components';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './authorization.module.css';
import { useResetForm } from '../../hooks';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

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
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(authFormSchema),
	});
	const [serverError, setServerError] = useState('');
	const dispatch = useDispatch();

	const onSubmit = ({ login, password }) => {
		console.log(login);
		console.log(password);
	};
	const formError = errors?.login?.message || errors?.password?.message;

	const errorMessage = formError || serverError;
	console.log(errorMessage);

	return (
		<>
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
