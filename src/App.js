import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import LoginControl from './LoginControl';

const messages = ['React', 'React-DOM', 'Components']

function App() {

  const Mailbox = (props) => {
    const unreadMessages = props.unreadMessages
    return (
      <div>
        <h1>Hello</h1>
        {unreadMessages.length > 0 ? <h2>You have {unreadMessages.length} unreadMessages. 
        </h2> : <h2>You do not have any unread messages</h2>} 
      </div>
    )
  }

  return (
    <Mailbox unreadMessages = {messages} />
  )
}

export default App;

//alternative code
{/* <h1>Hello</h1>
        {unreadMessages.length > 0 && <h2>You have {unreadMessages.length} unreadMessages. 
        </h2>}  */}