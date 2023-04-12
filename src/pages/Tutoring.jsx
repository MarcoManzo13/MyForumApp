import './Tutoring.css';
import Header from '../components/Header';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Tutoring = () => {
  return (
    <div className='TutoringContainer'>

        {/** Header */}
        <Header title="Tutoring"/>

        {/** Select tutor container */}
        <div className="tutorSelectionContainer">
            <p className='titleSelectTutor'>Select a Tutor:</p>
            <select className='selectForm'>
                <option className='optionSelectForm' value="disabled" disabled>Options</option>
                <option className='optionSelectForm' value="Teacher1">Teacher 1</option>
                <option className='optionSelectForm' value="Teacher2">Teacher 2</option>
                <option className='optionSelectForm' value="Teacher3">Teacher 3</option>
            </select>
        </div>

        {/** Calendar container */}
        <div className="dateSelectionContainer">
            <div className="dataSelectionInsideContainer">
                <p className='titleDate'>Select a date:</p>
                <Calendar></Calendar>
            </div>
        </div>

        {/** Submit container */}
        <div className="buttonSendContainer">
            <button className='buttonDateSelection' disabled>Search</button>
        </div>
    </div>
  )
}

export default Tutoring;