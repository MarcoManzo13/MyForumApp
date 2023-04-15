import './StepProgressBar.css';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import Capybara from '../images/Capybara.png'

const StepProgressBar = () => {
  return (
    <div className='ProgressBarContainer'>
        <ProgressBar
          percent={100} // You can set this to any value between 0 and 100
          filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
          width={300}
          height={30}
        >
        <Step>
          {({ accomplished }) => (
            <div
              className="progress-bar"
              style={{
                width: '25vw',
                height: '150px',
                borderRadius: '5px',
                backgroundColor: accomplished ? '#2dbb54' : '#ccc',
                transition: 'all 1s ease-out',
              }}
            >
              <div className='imgWrapperStep1'>
                  <p className='titleSteps'>Name and ID</p>
                  <img
                    style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                    width="60"
                    src={Capybara}
                    alt=''
                  />
              </div>
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished }) => (
            <div
              className="progress-bar"
              style={{
                width: '27vw',
                height: '150px',
                borderRadius: '5px',
                backgroundColor: accomplished ? '#2dbb54' : '#ccc',
                transition: 'all 1s ease-out',
              }}
            >
              <div className='imgWrapperStep1'>
                  <p className='titleSteps'>Post your Description</p>
                  <img
                    style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                    width="60"
                    src={Capybara}
                    alt=''
                  />
              </div>
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished }) => (
            <div
              className="progress-bar"
              style={{
                width: '25vw',
                height: '150px',
                borderRadius: '5px',
                backgroundColor: accomplished ? '#2dbb54' : '#ccc',
                transition: 'all 1s ease-out',
              }}
            >
              <div className='imgWrapperStep1'>
                  <p className='titleSteps'>Make a Post</p>
                  <img
                    style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                    width="60"
                    src={Capybara}
                    alt=''
                  />
              </div>
            </div>
          )}
        </Step>
        </ProgressBar>
    </div>
  )
}

export default StepProgressBar;