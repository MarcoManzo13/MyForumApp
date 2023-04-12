import './GroupChat.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faUser } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';

const GroupChat = () => {
  return (
    <div className='GroupChatContainer'>
        <Header title="Group"/>

        {/** Posted Materials */}
        <div className="PostedMaterialContainer">
            <p className='postedMaterialsTitle'>Materials</p>
            <div className="postedMaterialsInsideContainer">
                <div className="postedMaterialsIconNameContainer">
                    <FontAwesomeIcon icon={faBoxOpen} className='iconGroupChatMaterials' size="3x"></FontAwesomeIcon>
                    <p className='nameOfPostedMaterial'>Presentation1.ptx</p>
                </div>
                <div className="postedMaterialsIconNameContainer">
                    <FontAwesomeIcon icon={faBoxOpen} className='iconGroupChatMaterials' size="3x"></FontAwesomeIcon>
                    <p className='nameOfPostedMaterial'>Presentation2.ptx</p>
                </div>
                <div className="postedMaterialsIconNameContainer">
                    <FontAwesomeIcon icon={faBoxOpen} className='iconGroupChatMaterials' size="3x"></FontAwesomeIcon>
                    <p className='nameOfPostedMaterial'>Presentation3.ptx</p>
                </div>
            </div>
        </div>

        {/** Questions */}
        <div className="QuestionsContainer">
            <p className='questionsTitle'>Questions</p>
            <div className="insideQuestionsContainer">
                <p className='questionGroupChatTitle'>Question 1: Lorem ipsum dolor sit amet consectetur adipisicing elit?</p>
                <p className='questionGroupChatAnswer'><span className='spanAnswerQuestion'>Answer: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quis nobis enim ullam velit dolor, atque eaque. Reiciendis, sapiente.
                </p>
            </div>
            <div className="insideQuestionsContainer">
                <p className='questionGroupChatTitle'>Question 2: Lorem ipsum dolor sit amet consectetur adipisicing elit?</p>
                <p className='questionGroupChatAnswer'><span className='spanAnswerQuestion'>Answer: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quis nobis enim ullam velit dolor, atque eaque. Reiciendis, sapiente.
                </p>
            </div>
            <div className="insideQuestionsContainer">
                <p className='questionGroupChatTitle'>Question 3: Lorem ipsum dolor sit amet consectetur adipisicing elit?</p>
                <p className='questionGroupChatAnswer'><span className='spanAnswerQuestion'>Answer: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quis nobis enim ullam velit dolor, atque eaque. Reiciendis, sapiente.
                </p>
            </div>
        </div>

        {/** Comments */}
        <div className="GroupCommentsContainer">
            <p className='GroupCommentsTitle'>Comments</p>
            <div className="individualGroupCommentContainer">
                <div className="individualGroupCommentPhotoNameContainer">
                    <FontAwesomeIcon icon={faUser} className='individualGroupCommentPhotoIcon' size='4x'></FontAwesomeIcon>
                    <p className='GroupCommentNameOfUser'>David Leyva</p>
                </div>
                <div className="individualGroupCommentTextContainer">
                    <p className='individualGroupCommentText'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, odit necessitatibus. 
                        Id nam quis provident laudantium distinctio.
                    </p>
                </div>
            </div>
            <div className="individualGroupCommentContainer">
                <div className="individualGroupCommentPhotoNameContainer">
                    <FontAwesomeIcon icon={faUser} className='individualGroupCommentPhotoIcon' size='4x'></FontAwesomeIcon>
                    <p className='GroupCommentNameOfUser'>Miranda Lopez</p>
                </div>
                <div className="individualGroupCommentTextContainer">
                    <p className='individualGroupCommentText'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, odit necessitatibus. 
                        Id nam quis provident laudantium distinctio.
                    </p>
                </div>
            </div>
            <div className="individualGroupCommentContainer2">
                <div className="individualGroupCommentPhotoNameContainer">
                    <FontAwesomeIcon icon={faUser} className='individualGroupCommentPhotoIcon' size='4x'></FontAwesomeIcon>
                    <p className='GroupCommentNameOfUser'>Jose Ruiz</p>
                </div>
                <div className="individualGroupCommentTextContainer">
                    <p className='individualGroupCommentText'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, odit necessitatibus. 
                        Id nam quis provident laudantium distinctio.
                    </p>
                </div>
            </div>
            {/** Post a Comment */}
            <div className="PostAGroupCommentContainer">
                <p className='PostACommentGroupTitle'>Post a comment</p>
                <textarea name="" id="" cols="45" rows="5" placeholder='Type your comment here...'></textarea>
                <button disabled className='PostCommentButtonGroup'>Submit Comment</button>
            </div>
        </div>
    </div>
  )
}

export default GroupChat;