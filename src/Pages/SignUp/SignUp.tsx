import React from 'react'
import { Sign_In_but } from '../../Components/Buttons/SignIn/Sign_In-but'
import { Input } from '../../Components/input/Input'
import signUpBg from '../../assets/signUp.png'

export const SignUp: React.FC = () => {
  return (
      <div className="sign_up-container">
        <div className="sign_up-form">
          <h1 className="sign_up-title">Sign Up</h1>
          <Input label="Name" />
          <Input label="Login" />
          <Input label="Password" />
          <Input label="Enter your password again" />
          <Sign_In_but/>
          <span className="sign_up-description">Not a member yet? <a href="#" className="link_signIn">Sign in</a></span>

        </div>
        <div className="sign_up-bg">
          <img src={signUpBg} alt="Image" className="sign_up-img" />
        </div>
      </div>
  )
}