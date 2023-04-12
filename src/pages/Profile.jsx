import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';

const Profile = () => {
  return (
    <div className='ProfileContainer'>
      {/** Header */}
      <Header title="Profile"/>

      {/** My Account Information */}
      <div className="MyAccountContainer">
        <div className="namePhotoIDContainer">
          <div className="nameIDContainer">
            <p className='nameProfileText'>
              Student Name:
              <br />
              Juan Lopez
            </p>
            <p className='IDProfileText'>
              Student ID: 
              <br />
              173127
            </p>
          </div>
          <div className="imgProfileContainer">
            <FontAwesomeIcon icon={faUser} size="5x" className='iconProfile'></FontAwesomeIcon>
          </div>
        </div>
      </div>

      {/** Description Container */}
      <div className="MyDescriptionContainer">
        <p className='myDescriptionTitle'>Please type a small description of yourself:</p> 
        <p className='myDescriptionParagraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, beatae eos 
        excepturi autem unde quisquam reiciendis? 
        </p> 
      </div>

      {/** Make a post container */}
      <div className="MakeAPostContainer">
        <p className='makeAPostTitle'>Make a post:</p>
        <textarea name="" id="" cols="50" rows="2"  placeholder='Type your thoughts here.'></textarea>
        <button className='makeAPostButton' disabled>Post</button>
      </div>
    </div>
  )
}

export default Profile;