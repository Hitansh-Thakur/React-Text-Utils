import React from 'react'

export const Button = (props) => {


  return (
    <>
        <button onClick={props.onClick} className="btn btn-primary w-100" type="submit">{props.content}</button>
    </>
  )
}
