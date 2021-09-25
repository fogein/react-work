import React from 'react'

export const Sign_In_but= (props:any) => {
  return (
      <>
        <div className="container__sign-in">
          <button className="signIn__button">
            <span className="signIn__button-text">{props.label}</span>
          </button>
        </div>
      </>
  )
}
