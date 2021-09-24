/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { Sign_In_but } from '../../Components/Buttons/SignIn/Sign_In-but'
import { Input } from '../../Components/input/Input'
import signInBg from '../../assets/SignInBg.png'

export const SignIn: React.FC = () => {
  return (
      <div className="sign_in-container">
        <div className="sign_in-form">
          <h1 className="sign_in-title">Sign In</h1>
          <form action="">
          <Input label="Login" />
          <Input label="Password" />
          </form>
          <Sign_In_but/>
          <span className="sign_in-description">Not a member yet? <a href="#" className="link_signUp">Sign up</a></span>

        </div>
        <div className="sign_in-bg">
          <img src={signInBg} alt="Image" className="sign_in-img" />
        </div>
      </div>
  )
}
