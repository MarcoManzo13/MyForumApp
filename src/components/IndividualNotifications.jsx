import './IndividualNotifications.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IndividualNotifications = ({Date, Title, ExpirationDate, Urgency}) => {
  return (
    <div className='IndividualNotificationContainer'>
        <div className="arrivalDateContainer">
            <p className='arrivalDateTitle'>
                Reception Date:
            </p>
            <p className='arrivalDateNotification'>
                {Date}
            </p>
        </div>
        <div className="informationNotificationContainer">
            <p className='titleInformationNotification'>{Title}</p>
            <p className='expirationDateInformationNotification'>{ExpirationDate}</p>
        </div>
        <div className="UrgencyContainer">
            <p className='UrgencyTitle'>Urgency</p>
            <FontAwesomeIcon icon={Urgency} className='UrgencyIcon' size="2x"></FontAwesomeIcon>
        </div>
    </div>
  )
}

export default IndividualNotifications