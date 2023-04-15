import './Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
//import Capybara from '../images/Capybara.png';
import Capybara from '../images/Capybara2.gif'

const Header = ( {title} ) => {
  return (
    <div>
        <div className="titleHeaderContainer">
          <Link to="/Menu"><FontAwesomeIcon className='iconArrowHeader' size='3x' icon={faArrowCircleLeft}></FontAwesomeIcon></Link>
          <p className='titleHeader'>{title}</p>
          <img src={Capybara} alt="" className='capybaraHeaderIMG'/>
          {/**<FontAwesomeIcon className='iconArrowHeaderWhite' size='3x' icon={faArrowCircleLeft}></FontAwesomeIcon>*/}
        </div>
    </div>
  )
}

export default Header;