import React from 'react'
import Button from '../Container/Button'
import { useNavigate } from 'react-router-dom'
const MainPage = () => {
    const navigate=useNavigate();
const handleSignIn=()=>{
    console.log("Hey there !! this is handleSingIn");
    navigate('/api/v1/signIn');
    }
    const handleSignUp=()=>{
    console.log("Hey there !! this is handleSingUp");
    navigate('/api/v1/signUp');

    }
  return (
    <div className='mainPage'>
         <Button className='buttonSignIn' onSelect={handleSignIn}>SignIn</Button>
         <Button className='buttonSignUp' onSelect={handleSignUp}>SignUP</Button>
    </div>
  )
}

export default MainPage