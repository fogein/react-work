/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-pascal-case */
import { Sign_In_but } from '../../Components/Buttons/SignIn/Sign_In-but'
import { Input } from '../../Components/input/Input'
import signInBg from '../../assets/SignInBg.png'


export interface ISignIn {
  props?:any
}


export const SignIn:React.FC = () => {

 const state: any = {
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

  const loginHandler = () =>{

  }
  const registerHandler = () =>{

  }
  const submitHandler = (event: { preventDefault: () => void }) =>{
    event.preventDefault()
  }
  const onChangeHadler = (event: any, controlName: any) => {
    console.log(`${controlName}:`, event.nativeEvent.data )
  }


  const renderInputs = () => {
    return Object.keys(state.formControls).map((controlName, index) => {
      const control = state.formControls[controlName]
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
        onChange={(event: any) => onChangeHadler (event,controlName) }
        />
      )
    })
  }

  return (
      <div className="sign_in-container">
        <div className="sign_in-form">
          <h1 className="sign_in-title">Sign In</h1>
          <form onSubmit={submitHandler}>

          {renderInputs()}

          <Sign_In_but onClick={loginHandler} label="Sign In"/>
          </form>
          <span className="sign_in-description">Not a member yet? <button onClick={registerHandler} className="link_signUp">Sign up</button></span>

        </div>
        <div className="sign_in-bg">
          <img src={signInBg} alt="Image" className="sign_in-img" />
        </div>
      </div>
  )
}
