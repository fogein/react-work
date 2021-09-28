import * as React from 'react'
let classes = require( './input.module.css')


const isInvalid  = ({valid, touched, shouldValidate}:FunctionComponent) =>{
  return !valid && shouldValidate && touched
}

interface FunctionComponent  {
  props:any
  type:any
  errorMessage:any
  value:any
  onChange:any
  label:any
  valid:any
  touched:any
  shouldValidate:any

}

export const Input:React.FC <FunctionComponent> = (props) => { 
  const inputType = props.type || "text"
  const cls = [classes.Input]
  const htmlFor = `${inputType}-${Math.random()}`

  if (isInvalid(props)) {
    cls.push(classes.invalid)
  }

  return (
    <>
        <div className={cls.join(' ')}>
          <label className="" htmlFor={htmlFor}>{props.label}</label>
            <input 
            type={inputType} 
            className="input" 
            id={htmlFor} 
            value={props.value}
            onChange={props.onChange}
            />
            {
              isInvalid(props)
              ?<span>{props.errorMessage}</span>
              :null
            }
        </div>
    </>
  )
}

