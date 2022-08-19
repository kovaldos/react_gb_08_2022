import React, { useEffect, useState } from 'react'
import { Message } from '../Message/Message';
import FormField from '../FormField/FormField';

export default function ChatsList(props) {
	const timer = React.useRef(null);
	const authors = {
		user: "user",
		bot: "bot"
	}

	const [messageList, setMessageList] = useState([]);

	useEffect(() => {
		if (messageList.length && messageList[messageList.length - 1].author !== authors.bot) {
			setTimeout(() => {
				setMessageList((currentMessageList) => [
					...currentMessageList, { author: authors.bot, text: 'Hi. We will answer you soon. Wait please' }
				])
			}, 1500)
		}
	}, [messageList])

	const handleMessageSubmit = (newText) => {
		setMessageList((currentMessageList) => [
			...currentMessageList,
			{ author: authors.user, text: newText },
		])
	}

	useEffect(() => {
		return () => {
			clearTimeout(timer.current);
		}
	}, [])

	return (
		<div className="chat">
			<div className="chat__block">
				{messageList.map((message, index) => (
					<Message key={index} text={message.text} author={message.author} />
				))}
				<FormField onSubmitFunc={handleMessageSubmit}></FormField>
			</div>
		</div>
	);
}