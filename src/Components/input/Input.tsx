import React from 'react'
let classes = require( './input.module.css')


const isInvalid = ({valid, touched, shouldValidate}:any) =>{
  return !valid && shouldValidate && touched
}


export const Input = (props:any) => { 
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

