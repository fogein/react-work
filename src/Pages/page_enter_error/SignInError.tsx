import React from 'react'
import { Sign_In_but } from '../../Components/Buttons/SignIn/Sign_In-but'
import { Input } from '../../Components/input/Input'
import signInBg from '../../assets/SignInBg.png'

export const SignInError: React.FC = () => {
  return (
      <div className="sign_inE-container">
        
        <div className="sign_inE-form">
          <h1 className="sign_inE-title">Sign In</h1>
          <Input label="Login" />
          <Input label="Password" error="Wrong password. Please, try again." />
          <Sign_In_but/>
          <span className="sign_inE-description">Not a member yet? <a href="#" className="link_signUp">Sign up</a></span>

        </div>
        <div className="errorContainer">
        <div className="aboutErrorContainer">
        <span className="aboutError">User with the specified username / password was not found.</span>
        </div>
          <div className="sign_inE-bg">
            <img src={signInBg} alt="Image" className="sign_inE-img" />
            
          </div>
        </div>
      </div>
  )
}
