import './Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

const Header = ( {title} ) => {
  return (
    <div>
        <div className="titleHeaderContainer">
          <Link to="/Menu"><FontAwesomeIcon className='iconArrowHeader' size='3x' icon={faArrowCircleLeft}></FontAwesomeIcon></Link>
          <p className='titleHeader'>{title}</p>
          <FontAwesomeIcon className='iconArrowHeaderWhite' size='3x' icon={faArrowCircleLeft}></FontAwesomeIcon>
        </div>
    </div>
  )
}

export default Header;