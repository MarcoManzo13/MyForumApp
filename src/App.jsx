import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Menu from './pages/Menu';
import Account from './pages/Account';
import Chat from './pages/Chat';
import Feedback from './pages/Feedback';
import Tutoring from './pages/Tutoring';
import Notes from './pages/Notes';
import IndividualTeacherFeedback from './pages/IndividualTeacherFeedback';
import Profile from './pages/Profile';
import GroupChat from './pages/GroupChat';
import Notifications from './pages/Notifications';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Menu" element={<Menu/>}/>
          <Route path="/Account" element={<Account/>}/>
          <Route path="/Chat" element={<Chat/>}/>
          <Route path="/Feedback" element={<Feedback/>}/>
          <Route path="/Tutoring" element={<Tutoring/>}/>
          <Route path="/Notes" element={<Notes/>}/>
          <Route path="/IndividualTeacherFeedback" element={<IndividualTeacherFeedback/>}/>
          <Route path="/Profile" element={<Profile/>}/>
          <Route path="/GroupChat" element={<GroupChat/>}/>
          <Route path="/Notifications" element={<Notifications/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
