import { InputEdit } from '../../../../../components';
import styles from './input-block-characteristics.css';
export const InputBlockCharacteristics = ({
	value,
	setValue,
	width,
	placeholder,
	type,
	text,
}) => {
	return (
		<div className={styles.input_block}>
			<InputEdit
				value={value}
				type={type}
				setValue={setValue}
				width={width}
				placeholder={placeholder}
			/>
			<p className={styles.text_content}>{text}</p>
		</div>
	);
};
