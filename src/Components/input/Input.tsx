import React from 'react'


export const Input = (props:any) => {
  return (
    <>
        <div className="input__form">
          <label className="label__form" htmlFor="login__default">{props.label}
            <input type="text" className="input" id="login__default" />
            <span className="errorMesage">{props.error}</span>
          </label>
        </div>
    </>
  )
}

