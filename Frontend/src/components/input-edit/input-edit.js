import { forwardRef } from 'react';
import styles from "./inputEdit.module.css"

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

		return authorization ? (
			<input placeholder={placeholder} type={type}  className={styles.input_reg} {...props} ref={ref} />
		) : (
			<>
				<input
					placeholder={placeholder}
					type={type || 'text'}
					className={width ? styles.input_edit_long: styles.input_edit}
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
