export const InputEdit = ({ value, setValue, width, placeholder }) => {
	const style = {
		width,
		height: '35px',
		padding: '5px',
		fontSize: '18px',
		borderRadius: '5px',
		textAlign: 'center'
	};
	return (
		<input
			placeholder={placeholder}
			type="text"
			style={style}
			value={value ? value : ''}
			onChange={({ target }) => setValue(target.value)}
		/>
	);
};
