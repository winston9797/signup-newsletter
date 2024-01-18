import React from 'react'

export default function SubscribeCard({handleSubmit,isError}) {


  return (
    <div className="subscribeCard">
        <div className="content">
            <h1>Stay Updated ! </h1>
            <p>join 6O.000 product managers receiving monthly updates on </p>
            <ul>
                <li>Product discovery and building what matters</li>
                <li>Mesuring to make sure updates are success</li>
                <li>And much more</li>
            </ul>
            <form  className="subscribeForm" onSubmit={handleSubmit}>
                <label htmlFor="email">Email adress : </label>
                <label htmlFor="email" className='errorLabel' style={{color: isError ? 'hsl(4, 100%, 67%)' : '#fff'}}>Valid email required</label>
                <input type="text" name="email" className={isError ? 'email errorEmail' : 'email'} placeholder='email@company.com' />
                <button>Subscribe to monthly newsletter</button>
            </form>
        </div>
        <div className="sideImg">
            <img src="../../src/images/illustration-sign-up-desktop.svg" alt="" />
        </div>
    </div>
  )
}
