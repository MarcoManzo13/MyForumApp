import './Feedback.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';

const Feedback = () => {
  return (
    <div className='FeedbackContainer'>
        {/** Header */}
        <Header title="Feedback"/>

        {/** Container Teacher 1 */}
        <div className="teachersContainer">
          <div className="teachersInsideContainer">
            <div className="teacherNameAndPhotoContainer">
              <Link to="/IndividualTeacherFeedback" className='IndividualTeacherFeedback'><FontAwesomeIcon className='iconTextFeedbackTeachers' size="3x" icon={faUser}></FontAwesomeIcon></Link>
              <p className='teacherNumberText'>Teacher 1</p>
            </div>
            <div className="paragraphFeedbackContainer">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, commodi? Debitis voluptatem sint suscipit at dignissimos deserunt ut cupiditate quia placeat voluptas qui...</p>
            </div>
          </div>
        </div>

        {/** Container Teacher 2 */}
        <div className="teachersContainer">
          <div className="teachersInsideContainer">
            <div className="teacherNameAndPhotoContainer">
              <Link to="/IndividualTeacherFeedback" className='IndividualTeacherFeedback'><FontAwesomeIcon className='iconTextFeedbackTeachers' size="3x" icon={faUser}></FontAwesomeIcon></Link>
              <p className='teacherNumberText'>Teacher 2</p>
            </div>
            <div className="paragraphFeedbackContainer">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, commodi? Debitis voluptatem sint suscipit at dignissimos deserunt ut cupiditate quia placeat voluptas qui...</p>
            </div>
          </div>
        </div>

        {/** Container Teacher 3 */}
        <div className="teachersContainer2">
          <div className="teachersInsideContainer">
            <div className="teacherNameAndPhotoContainer">
              <Link to="/IndividualTeacherFeedback" className='IndividualTeacherFeedback'><FontAwesomeIcon className='iconTextFeedbackTeachers' size="3x" icon={faUser}></FontAwesomeIcon></Link>
              <p className='teacherNumberText'>Teacher 3</p>
            </div>
            <div className="paragraphFeedbackContainer">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, commodi? Debitis voluptatem sint suscipit at dignissimos deserunt ut cupiditate quia placeat voluptas qui...</p>
            </div>
          </div>
        </div>

        {/** Post Container */}
        <div className="postContainer">
          <p className='titleFormFeedback'>Post something here...</p>
          <form className='formFeedback'>
            <textarea name="textareaFeedback" id="formFeddback" cols="50" rows="2" placeholder='Input your feedback'></textarea>
            <button className="formFeedbackButton" disabled>Send</button>
          </form>
        </div>
    </div>
  )
}

export default Feedback;