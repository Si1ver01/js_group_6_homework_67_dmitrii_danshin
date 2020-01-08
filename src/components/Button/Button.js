import React from 'react'

const Button = ({value,buttonHandler}) => {
  return (
    <div className="col-3 p-0 mb-2 px-1">
    <button type="button" className="btn btn-dark btn-block" onClick={buttonHandler}>
      {value}
    </button>
  </div>
  )
}

export default Button
