import React from 'react'
import { SignIn, SignUp, Button, MainPage, ConfirmMail, SentMail, SetPassword, PageNotFound,Home } from '../index';
import { Route,Routes } from 'react-router-dom'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/api/v1/signIn' element={<SignIn/>}/>
            <Route path='/api/v1/signUp' element={<SignUp/>}/>
            <Route path='/api/v1/conformMail' element={<ConfirmMail/>}/>
            <Route path='/api/v1/SentMail' element={<SentMail/>}/>
            <Route path='/api/v1/set-password' element={<SetPassword/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='*' element={<PageNotFound/>}/> 
        </Routes>
    </div>
  )
}

export default AllRoutes