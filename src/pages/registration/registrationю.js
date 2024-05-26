import { BackButton, InputEdit, Button, ErrorMessage } from '../../components';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useResetForm } from '../../hooks';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import styles from './registration.module.css';
import { Navigate } from 'react-router-dom';

const regFormSchema = yup.object().shape({
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
	passcheck: yup
		.string()
		.required('Заполните пароль')
		.oneOf([yup.ref('password'), null], 'Пароль не совпадает'),
});

export const Registration = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
			passcheck: '',
		},
		resolver: yupResolver(regFormSchema),
	});
	const [serverError, setServerError] = useState(null);
	const formError =
		errors?.login?.message || errors?.password?.message || errors?.passcheck?.message;

	const errorMessage = formError || serverError;
	const onSubmit = ({ login, password }) => {
		console.log(serverError);
	};

	return (
		<>
			<BackButton />
			<form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
				<h2 className={styles.h2_text}>Ррегистрация</h2>
				{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
				<div className={styles.input_container}>
					<InputEdit
						type="text"
						placeholder={'Имя'}
						authorization={true}
						{...register('login', { onChange: () => setServerError(null) })}
					/>
				</div>
				<div className={styles.input_container}>
					<InputEdit
						type="password"
						placeholder={'Пароль'}
						authorization={true}
						{...register('password', {
							onChange: () => setServerError(null),
						})}
					/>
				</div>
				<div className={styles.input_container}>
					<InputEdit
						type="password"
						placeholder={'Повторите пароль'}
						authorization={true}
						{...register('passcheck', {
							onChange: () => setServerError(null),
						})}
					/>
				</div>
				<div className={styles.input_container}>
					<Button type="submit" disabled={!!formError} width={'200px'}>
						Зарегистрироваться
					</Button>
				</div>
			</form>
		</>
	);
};
