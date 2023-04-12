import './Notes.css';
import Notes1 from '../images/notes1.png';
import Notes2 from '../images/notes2.png';
import Header from '../components/Header';

const Notes = () => {
  return (
    <div className='NotesContainer'>
        {/** Header */}
        <Header title="Notes"/>

        <div className="IndividualNotesContainer">
            {/** Individual Notes Container 1 */}
            <div className="notesContainer">
                <div className="imgWrapperNotes">
                    <p className='notesTitle'>Diego's Notes</p>
                    <img className='notesImg' src={Notes1} alt=''/>
                </div>
            </div>
            
            {/** Individual Notes Container 2 */}
            <div className="notesContainer">
                <div className="imgWrapperNotes">
                    <p className='notesTitle'>Pablo's Notes</p>
                    <img className='notesImg' src={Notes2} alt=''/>
                </div>
            </div>
        </div>

        {/** Upload Notes Container */}
        <div className="uploadNotesContainer">
            <button className='uploadButton' disabled>Upload PDF</button>
        </div>
    </div>
  )
}

export default Notes;