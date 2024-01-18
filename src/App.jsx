import { useState } from 'react'
import SubscribeCard from './assets/components/subscribeCard'
import SuccuesCard from './assets/components/succuesCard'
import './App.css'

function App() {
  const [succes, setsucces] = useState(false)
  const [isError, setisError] = useState(false)
  const [email, setemail] = useState(false)
  
  
  const handleSubmit = e=>{
    e.preventDefault()
    //validate email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(e.target[0].value.toLowerCase().match(emailRegex)){
      //subscription logic tbd
      //show error in front end 
      setisError(false)
      setsucces(true)
      setemail(e.target[0].value)
    }else{
      setisError(true)
    }
  }
  
  const handleDissmiss = e=>{
    setsucces(false)
  }

  if(!succes){
    return <SubscribeCard handleSubmit={handleSubmit} isError={isError} />
  }
  else{
    return <SuccuesCard email={email} handleDissmiss={handleDissmiss} />
  }

}

export default App
