import { forwardRef } from 'react';

export const InputEdit = forwardRef(
	(
		{
			value,
			setValue,
			width,
			placeholder,
			authorization,
			onRemove,
			btnDelete,
			type,
			...props
		},
		ref,
	) => {
		const style = {
			width,
			height: '35px',
			padding: '5px',
			fontSize: '18px',
			borderRadius: '5px',
			textAlign: 'center',
		};
		console.log(type)
		return authorization ? (
			<input placeholder={placeholder} type={type} style={style} {...props} ref={ref} />
		) : (
			<>
				<input
					placeholder={placeholder}
					type={type || 'text'}
					style={style}
					value={value ? value : ''}
					onChange={({ target }) => {
						setValue(target.value);
					}}
					{...props}
					ref={ref}
				/>
			</>
		);
	},
);
