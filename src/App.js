import { ChatEngine } from 'react-chat-engine';
import './App.css';

import ChatFeed from './components/ChatFeed';



const App = () => {

        return ( <
            ChatEngine height = "100vh"
            projectID = "4e7f487c-cd90-4256-acf6-3df0f726807a"
            userName = "Rosen"
            userSecret = "Rosen123"
            renderChatFeed = {
                (chatAppProps) => < ChatFeed {...chatAppProps }
                />} /
                >
            )
        }

        export default App;