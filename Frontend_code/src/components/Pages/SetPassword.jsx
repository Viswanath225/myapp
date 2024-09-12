import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
import Button from '../Container/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SetPassword = () => {
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   console.log("What is this",queryParams);
//   const token = queryParams.get('token');
//   console.log("Show this token",token);
    const navigate=useNavigate();

  const [password, setPassword] = useState({
    password:''
  });
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async() => {
    if (password === confirmPassword) {
        const res=await axios.post('http://3.110.221.63:3000/api/v1/set-password',{password:password,conformPassword:confirmPassword})
        console.log("This is response ",res.data);
        console.log('Passwords match. Submit to server.', {password, confirmPassword });
        navigate('/')
        
    } else {
      console.error('Passwords do not match.......');
    }
  };

  return (
    <div>
      <h3>Set Your Password</h3>
      <input
        type="password"
        placeholder="Enter your password"
        value={password.password }
        onChange={handlePasswordChange}
      />
      <input
        type="password"
        placeholder="Re-enter your password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
      <Button onSelect={handleSubmit}>Set Password</Button>
    </div>
  );
};

export default SetPassword;
