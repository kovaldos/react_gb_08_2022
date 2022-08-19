
import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import { Message } from './components/Message/Message';
import { Grid, List, ListItemText } from '@mui/material';
import { blue } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import FormField from './components/FormField/FormField';

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
                    <FormField />
              </div>
            </Grid>
          </Grid>
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
