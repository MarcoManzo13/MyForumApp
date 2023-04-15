import './Notifications.css';
import IndividualNotifications from '../components/IndividualNotifications';
import { faExclamation, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';

const Notifications = () => {
  return (
    <div className='NotificationsContainer'>
        <Header title="Notifications"/>
        <IndividualNotifications 
        Date="02/04/2023"
        Title="Question Asked"
        ExpirationDate="03/04/2023"
        Urgency={faExclamation}
        />

        <IndividualNotifications 
        Date="5/04/2023"
        Title="Comment Posted"
        ExpirationDate="5/05/2023"
        Urgency={faCircleXmark}
        />

        <IndividualNotifications 
        Date="10/04/2023"
        Title="Feedback Received"
        ExpirationDate="20/04/2023"
        Urgency={faExclamation}
        />

        <IndividualNotifications 
        Date="10/05/2023"
        Title="Homework 4 Grade Posted"
        ExpirationDate="13/05/2023"
        Urgency={faCircleXmark}
        />

        <IndividualNotifications 
        Date="15/05/2023"
        Title="Final Project"
        ExpirationDate="18/06/2023"
        Urgency={faCircleXmark}
        />

        <IndividualNotifications 
        Date="5/04/2023"
        Title="Homework 16"
        ExpirationDate="18/04/2023"
        Urgency={faCircleXmark}
        />
    </div>
  )
}

export default Notifications