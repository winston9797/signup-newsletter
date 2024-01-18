import React from 'react'

export default function SuccuesCard({email,handleDissmiss}) {
  return (
    <div className='successCard'>
      <img src='../../src/images/icon-success.svg' alt="" />
      <h1>Thanks for Subscribing</h1>
      <p>a confirmation email has been sent to <span style={{fontWeight:'bold'}}>{email}</span> please open it and click the button inside to confirm your subscription</p>
      <button onClick={handleDissmiss}>Dismiss message</button>
    </div>
  )
}
