
import './App.scss';
import { Message } from './components/message/Message';

const myMessage = 'Hello ReactJS!';

function App() {
  return (
    <div className="App">
      <Message message={myMessage} />
    </div>
  );
}

export default App;
