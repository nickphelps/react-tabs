import React from 'react'

const Success = ({reset}) => {
  return (
    <div class="box">
        <h1 class="title">Login Success!</h1>
        <button class="button is-primary is-medium" onClick={() => reset()}>Reset Login Form</button>
    </div>
  )
}

export default Success
