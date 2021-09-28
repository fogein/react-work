/* eslint-disable no-this-before-super */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-pascal-case */
import * as React from 'react'
import { Sign_In_but } from '../../Components/Buttons/SignIn/Sign_In-but'
import { Input } from '../../Components/input/Input'
import signInBg from '../../assets/SignInBg.png'

  interface myProps {

  }
  interface myState {
    formControls:any
  }


export class SignIn extends React.Component<myProps, myState> {

  constructor (props: any){
    super(props);

    this.state = {
      formControls:{
        email: {
          value:'',
          type:'email',
          label:'E-mail',
          errorMesage:'Введите коректный емаил',
          valid:false,
          touched:false,
          validation:{
            required:false,
            email:true
          }
        },
        password: {
            value:'',
            type:'password',
            label:'Password',
            errorMesage:'Введите коректный password',
            valid:false,
            touched:false,
            validation:{
              required:false,
              minLength:6
            }
        }
      }
    }
  }

  

   loginHandler = () =>{

  }
   registerHandler = () =>{

  }
   submitHandler = (event: { preventDefault: () => void }) =>{
    event.preventDefault()
  }

   validateControl = (value: any, validation: any) => {
      if (!validation){
        return true
      }
        let isValid = true 
        if (validation.requered) {
          isValid = value.trim() !=="" && isValid
        }
        if (validation.email) {

        }
        if (validation.minLength) {

        }
        return isValid
  }

   onChangeHadler = (event: any, controlName: any) => {
    console.log(`${controlName}:`, event.target.value )

    const formControls = { ...this.state.formControls }
    const control = { ...formControls[controlName]}
    control.value = event.target.value
    control.touched = true
    control.valid = this.validateControl(control.value, control.validation)

    formControls[controlName] = control

    this.setState({
      formControls
    })


  }



   renderInputs = () => {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName]
      return (
        <Input
        key={controlName + index}
        type={control.type}
        value={control.value}
        valid={control.valid}
        touched={control.touched}
        label={control.label}
        shouldValidate={!!control.validation}
        errorMesage={control.errorMesage}
        onChange={(event: any) => this.onChangeHadler (event,controlName) }
        />
      )
    })
  }

  render () {
    return (
      <div className="sign_in-container">
        <div className="sign_in-form">
          <h1 className="sign_in-title">Sign In</h1>
          <form onSubmit={this.submitHandler}>

          {this.renderInputs()}

          <Sign_In_but onClick={this.loginHandler} label="Sign In"/>
          </form>
          <span className="sign_in-description">Not a member yet? <button onClick={this.registerHandler} className="link_signUp">Sign up</button></span>

        </div>
        <div className="sign_in-bg">
          <img src={signInBg} alt="Image" className="sign_in-img" />
        </div>
      </div>
  )
  }
}
