import './Menu.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faUser, faCommentDots, faPersonChalkboard, faNoteSticky, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
  return (
    <div className='MenuContainer'>
        <div className="buttonsMenuContainer">
            <Link className='MenuButtons' to="/Profile"><FontAwesomeIcon icon={faUser} size="2x" className='iconMenuButtons'></FontAwesomeIcon>Profile</Link>
            <Link className='MenuButtons' to="/Tutoring"><FontAwesomeIcon icon={faPersonChalkboard} size="2x" className='iconMenuButtons'></FontAwesomeIcon>Tutoring Appointments</Link>
            <Link className='MenuButtons' to="/Chat"><FontAwesomeIcon icon={faComment} size="2x" className='iconMenuButtons'></FontAwesomeIcon>Chat</Link>
            <Link className='MenuButtons' to="/Feedback"><FontAwesomeIcon icon={faCommentDots} size="2x" className='iconMenuButtons'></FontAwesomeIcon>Feedback</Link>
            <Link className='MenuButtons' to="/Notes"><FontAwesomeIcon icon={faNoteSticky} size="2x" className='iconMenuButtons'></FontAwesomeIcon>Notes</Link>
            <Link className='MenuButtons' to="/GroupChat"><FontAwesomeIcon icon={faPeopleGroup} size="2x" className='iconMenuButtons'></FontAwesomeIcon>Group</Link>
        </div>
          
    </div>
  )
}

export default Menu;