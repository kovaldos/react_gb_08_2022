
import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import { Message } from './components/Message/Message';
import { Button, Grid, List, ListItemText, TextField } from '@mui/material';
import { blue } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const authors = {
  user: "user",
  bot: "bot"
}


const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
});


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
    <ThemeProvider theme={theme}>
      <div className="App">
        <main>
          <section className="message">
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <div className="list">
                  <List>
                    <ListItemText className="item">1 чат</ListItemText>
                    <ListItemText className="item">2 чат</ListItemText>
                    <ListItemText className="item">3 чат</ListItemText>
                    <ListItemText className="item">4 чат</ListItemText>
                  </List>
                </div>
              </Grid>
              <Grid item xs={8}>
                <div className="chat">
                  <ul className="message__list">
                    {messageList.map((message, index) => (
                      <Message key={index} author={message.author} text={message.text} />
                    ))}
                  </ul>

                  <form className="chat__form" action="#" onSubmit={handleMessageSubmit}>
                    <TextField fullWidth autoFocus id="filled-basic" value={inputValue} placeholder=" Введите текст..." onChange={handleMessageChange} className="text"> </TextField>
                    <Button variant="contained" color="primary" type="submit" className="chat__submit">Send</Button>
                  </form>
                </div>
              </Grid>
            </Grid>
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
