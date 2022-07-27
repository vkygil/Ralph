import Chatbot from 'react-chatbot-kit';
import ActionProvider from './ActionProvider';
import config from './config';
import MessageParser from './MessageParser';
import '../Chatbot/Chatbot.css';


const StoreChatbot = () => {

    return <Chatbot actionProvider={ActionProvider} headerText='Chatbot'
        config={config} messageParser={MessageParser} />;
}

export default StoreChatbot;