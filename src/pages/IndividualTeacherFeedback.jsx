import './IndividualTeacherFeedback.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck, faSquare, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const IndividualTeacherFeedback = () => {
  return (
    <div className='IndividualTeacherFeedbackContainer'>
        {/** Header */}
        <div className="titleIndividualTeacherFeedbackHeaderContainer">
          <Link to="/Menu"><FontAwesomeIcon className='iconArrowIndividualTeacherFeedbackHeader' size='3x' icon={faArrowCircleLeft}></FontAwesomeIcon></Link>
          <p className='titleIndividualTeacherFeedbackHeader'>Profesor's Feedback</p>
          <FontAwesomeIcon className='iconArrowIndividualTeacherFeedbackHeaderWhite' size='3x' icon={faArrowCircleLeft}></FontAwesomeIcon>
        </div>
        
        {/** Actions */}
        <div className="ActionsContainer">
            <div className="possibleActionContainers">
                <p className='possibleActionText'>Request Tutoring</p>
                <FontAwesomeIcon className='iconCheckboxIndividualFeedback' size='3x' icon={faSquareCheck}></FontAwesomeIcon>
            </div>
            <div className="possibleActionContainers">
                <p className='possibleActionText'>Ask a Question</p>
                <FontAwesomeIcon className='iconCheckboxIndividualFeedback' size='3x' icon={faSquare}></FontAwesomeIcon>
            </div>
            <div className="possibleActionContainers">
                <p className='possibleActionText'>Post feedback</p>
                <FontAwesomeIcon className='iconCheckboxIndividualFeedback' size='3x' icon={faSquareCheck}></FontAwesomeIcon>
            </div>
            <div className="sendButtonIndividualFeedbackContainer">
                <button className='sendButtonIndividualFeedback'>Go</button>
            </div>
        </div>
        {/** Feedback */}
        <div className="IndividualFeedbackContainer">
            <p className='titleIndividualFeedback'>Recent Feedback</p>
            <p className='paragraphIndividualFeedback'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore voluptas eaque itaque impedit molestias, 
                quasi sit nesciunt delectus mollitia earum aperiam perferendis ipsam soluta non praesentium laboriosam sunt unde?
            </p>
        </div>
        {/** Material */}
        <div className="MaterialContainer">
            <p className='titleIndividualFeedback'>Recent Material</p>
            <p className='paragraphIndividualFeedback'>
                <button className='buttonSendMaterial'>Click here to see the profesor's latest presentations.</button> 
            </p>
        </div>
    </div>
  )
}

export default IndividualTeacherFeedback;