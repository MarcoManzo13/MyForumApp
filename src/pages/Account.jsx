import './Account.css';
import { useState } from 'react';

const Account = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className='AccountContainer'>
      {isLogin ? (
        <form>
          <p className='loginRegisterTitle'>Login</p>
          <label>
            <p className='labelTitles'>Email</p>
            <input type="email" name="email" className='inputAccount' required placeholder='Enter your Email'/>
          </label>

          <label>
            <p className='labelTitles'>Password</p>
            <input type="password" name="password" className='inputAccount' required placeholder='Enter your Password'/>
          </label>
          <button type="submit" className='RealSubmitButton'>Login</button>
          <div className="submitButtonContainer">
            <p className='submitButtonText'>Don't have an account yet?{' '}</p>
            <button className='submitButton' onClick={handleToggle}>
              <p className='submitButtonText'>Register</p> 
            </button>
          </div>
        </form>
      ) : (
        <form>
          <p className='loginRegisterTitle'>Register</p>
          <label>
            <p className='labelTitles'>Email</p>
            <input type="email" name="email" className='inputAccount' required placeholder='Enter your Email'/>
          </label>
          <label>
            <p className='labelTitles'>Password</p>
            <input type="password" name="password" className='inputAccount' required placeholder='Enter your Password'/>
          </label>
          <label>
            <p className='labelTitles'>Confirm Password</p>
            <input type="password" name="confirmPassword" className='inputAccount' required placeholder='Enter your Confirm Password'/>
          </label>
          <label>
            <p className='labelTitles'>School</p>
            <input type="password" name="confirmPassword" className='inputAccount' required placeholder='Enter your School'/>
          </label>
          <button type="submit" className='RealSubmitButton'>Register</button>
          <div className="submitButtonContainer">
            <p className='submitButtonText'>
              Already have an account?{' '}
            </p>
            <button className='submitButton' onClick={handleToggle}>
              <p className='submitButtonText'>Log In</p> 
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export default Account;