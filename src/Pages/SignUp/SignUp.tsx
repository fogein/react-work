import React from 'react'
import { Sign_In_but } from '../../Components/Buttons/SignIn/Sign_In-but'
import { Input } from '../../Components/input/Input'
import signUpBg from '../../assets/signUp.png'
import { Link } from 'react-router-dom'

export const SignUp: React.FC = () => {
  return (
      <div className="sign_up-container">
        <div className="sign_up-form">
          <h1 className="sign_up-title">Sign Up</h1>
          <form action="">
            
          </form>
          <div className="checkbox_div">
          <input type="checkbox" id="accept"/>
          <label htmlFor="accept">I accept the agreement</label>
          </div>
          
          <Sign_In_but/>
          <span className="sign_up-description">Not a member yet? <Link to="/SignIn" className="link_signIn">Sign in</Link></span>

        </div>
        <div className="sign_up-bg">
          <img src={signUpBg} alt="Image" className="sign_up-img" />
        </div>
      </div>
  )
}
