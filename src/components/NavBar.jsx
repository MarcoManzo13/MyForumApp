import './NavBar.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBars, faHouse } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
    <div className='NavBarContainer'>
      
        <div className="buttonsNavBarContainerAndSearchBar">

          <div className="buttonsNavBarContainer">
            
            <Link to="/Menu" className='buttonsNavBar'><FontAwesomeIcon icon={faMagnifyingGlass} size="2x" /></Link>
            <Link to="/" className='buttonsNavBar'><FontAwesomeIcon icon={faHouse} size="2x" ></FontAwesomeIcon></Link>
            <Link to="/Menu" className='buttonsNavBar'><FontAwesomeIcon icon={faBars} size="2x" ></FontAwesomeIcon></Link>
            {/**
            <a target="_blank" rel="noreferrer" href="https://chat.openai.com/chat" className='buttonsNavBar'>Ask Chat GPT</a>
             */}
          </div>
            
            {/**
          <div className="searchBarContainer">
            <div className="MagnifyingGlassIconContainer">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="magnifyingGlassIcon" size="2x" />
            </div>
            <div className="inputFieldContainer">
              <input type="text" disabled className='inputFieldButton' placeholder='Search a teacher or student'></input>
            </div>
          </div>
           */}

        </div>
    </div>
  )
}

export default NavBar