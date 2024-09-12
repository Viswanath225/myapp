import React, { useState } from "react";
import axios from 'axios';
import Button from "../Container/Button";
import { useNavigate,useLocation } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate(); 
    const location=useLocation();
    const {email} =location.state || {};
    const [userDetails, setUserDetails] = useState({
        email: '',
        password: '',
    });
    const [reset,setReset]=useState({
        email:email || '',
    })

    const handleMail = (event) => {
        setUserDetails({ ...userDetails, email: event.target.value });
    };

    const handlePassword = (event) => {
        setUserDetails({ ...userDetails, password: event.target.value });
    };

    const handleForgotPassword = async () => {
        try {
            const response = await axios.post('http://3.110.221.63:3000/api/v1/conformMail', {
                email: reset.email,
            });
    
            console.log('Confirmation sent: ', response.data);
            navigate('/api/v1/SentMail', { state: { email: reset.email } });
        } catch (error) {
            console.error('Error During confirmation:', error);
            alert('Failed to send confirmation email. Please try again later.');
        }
    };
    

    const handleLoginButton = async () => {
        console.log("This is email ", userDetails.email);
        console.log("This is Password", userDetails.password);
        
        try {   
            const response=await axios.post('http://3.110.221.63:3000/api/v1/login',{
                email:userDetails.email,
                password:userDetails.password,
            });

            if (response.data.isLoggedIn) { 
                setLogin({ ...login, isLoggedIn: true });
                console.log("Logging in.........");
                navigate('/Home');
            } else {
                console.log("Invalid credentials");
            }
        } catch (error) {
            console.error("Error logging in:", error);
            console.log("Invalid credentials");
        }
    };

    return (
        <div>
            <span>Email</span>
            <input type="email" value={userDetails.email} onChange={handleMail} placeholder="mail id" />
            <span>Password</span>
            <input type="password" value={userDetails.password} onChange={handlePassword} placeholder="password" />
            <div className='button'>
                <Button onSelect={handleForgotPassword}>Forgot Password</Button>
                <Button className='Login-button' onSelect={handleLoginButton}>Login</Button>
            </div>
        </div>
    );
};

export default SignIn;
