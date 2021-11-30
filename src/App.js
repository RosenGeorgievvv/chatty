import { ChatEngine } from 'react-chat-engine';
import './App.css';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm'


const App = () => {
        if (!localStorage.getItem('username')) return <LoginForm / >


            return ( <
                ChatEngine height = "100vh"
                projectID = "4e7f487c-cd90-4256-acf6-3df0f726807a"
                userName = { localStorage.getItem('username') }
                userSecret = { localStorage.getItem('password') }
                renderChatFeed = {
                    (chatAppProps) => < ChatFeed {...chatAppProps }
                    />} /
                    >
                )
            }

        export default App;