import React from 'react'

export const Input = (props:any) => {
  return (
    <>
        <form className="input__form" action="">
          <label className="label__form" htmlFor="login__default">{props.label}
            <input type="text" className="input" id="login__default" />
          </label>
        </form>
    </>
  )
}

