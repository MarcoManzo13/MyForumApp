import './Home.css'
import { Link } from 'react-router-dom';
import { ReactComponent  as IconoCasa } from '../images/HomeIcon.svg';

const Home = () => {
  return (
    <div className='HomeContainer'>
        <div className="iconoContainer">
            <IconoCasa className='IconHome'/>
            <Link to="/Account" className='buttonClickMe'>Click Here to Sign In</Link>
        </div>
    </div>
  )
}

export default Home;