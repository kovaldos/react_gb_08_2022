
import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import { Message } from './components/Message/Message';

const authors = {
  user: "user",
  bot: "bot"
}

function App() {

  const [messageList, setMessageList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleMessageChange = (evt) => {
    setInputValue(evt.target.value)
  }

  const handleMessageSubmit = (evt) => {
    evt.preventDefault();
    setMessageList((currentMessageList) => [
      ...currentMessageList, { author: authors.user, text: inputValue }
    ])
    setInputValue('')
  }

  useEffect(() => {
    if (messageList.length && messageList[messageList.length - 1].author !== authors.bot) {
      setTimeout(() => {
        setMessageList((currentMessageList) => [
          ...currentMessageList, { author: authors.bot, text: 'Hi. We will answer you soon. Wait please' }
        ])
      }, 1500)
    }
  }, [messageList])

  return (
    <div className="App">
      <section className="message">
        <div className="container">
          <ul className="message__list">
            {messageList.map((message, index) => (
              <Message key={index} author={message.author} text={message.text} />
            ))}
          </ul>

          <form className="chat__form" action="#" onSubmit={handleMessageSubmit}>
            <input className="chat__input" placeholder="enter text..." type="text" value={inputValue} onChange={handleMessageChange} />
            <button className="btn btn--orange chat__submit" type="submit">Send</button>
          </form>
        </div>
      </section>

    </div>
  );
}

export default App;
