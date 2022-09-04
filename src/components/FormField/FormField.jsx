import { useState } from 'react';
import { Button, TextField } from '@mui/material';

export default function FormField(props) {

	const [inputValue, setInputValue] = useState('');

	const { onSubmitFunc } = props;

	const handleMessageChange = (evt) => {
		setInputValue(evt.target.value)
	}

	const handleMessageSubmit = (evt) => {
		evt.preventDefault()
		if (onSubmitFunc) {
			onSubmitFunc(inputValue);
			setInputValue('');
		}
	}
	return (
		<form action="#" className="chat__form" onSubmit={handleMessageSubmit}>
			<TextField fullWidth autoFocus id="filled-basic" value={inputValue} placeholder=" Введите текст..." onChange={handleMessageChange} className="text"> </TextField>
			<Button variant="contained" color="primary" type="submit" className="chat__submit">Send</Button>
		</form>
	)
}