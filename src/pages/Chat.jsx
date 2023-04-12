import './Chat.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';

const Chat = () => {
  return (
    <div className='ChatContainer'>
        {/** Header */}
        <Header title="Chat"/>

        {/** Conversation */}
        <div className="conversationContainer">
          <div className="sectionOne">
            <FontAwesomeIcon icon={faUser} className='iconUserInsideChat1' size='3x'></FontAwesomeIcon>
            <p className='chatText'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="sectionTwo">
            <p className='chatText'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <FontAwesomeIcon icon={faUser} className='iconUserInsideChat2' size='3x'></FontAwesomeIcon>
          </div>
          <div className="sectionThree">
            <FontAwesomeIcon icon={faUser} className='iconUserInsideChat1' size='3x'></FontAwesomeIcon>
            <p className='chatText'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        {/** Send Message Container */}
        <div className="footerChat">
          <input type="text" placeholder='Message' className='inputSendMessage'/>
          <FontAwesomeIcon icon={faPaperPlane} className='iconSendMessage' size="3x"></FontAwesomeIcon>
        </div>
    </div>
  )
}

export default Chat;