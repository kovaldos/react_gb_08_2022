import './style.scss';

export const Message = (props) => {
	return (
		<li className="message__item ">
			<span className="message__author">{props.author}</span>
			<span className="message__text">{props.text}</span>
		</li>
	);
}