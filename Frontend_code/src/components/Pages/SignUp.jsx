import React, { useState } from "react";
import Button from "../Container/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [details, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    password: ''
  });

  const handleFirstName = (event) => {
    setUserDetails({ ...details, firstName: event.target.value });
  };

  const handleLastName = (event) => {
    setUserDetails({ ...details, lastName: event.target.value });
  };

  const handleEmail = (event) => {
    setUserDetails({ ...details, email: event.target.value });
  };

  const handleContact = (event) => {
    setUserDetails({ ...details, contact: event.target.value });
  };

  const handleCancelButton = () => {
    setUserDetails({
      firstName: '',
      lastName: '',
      email: '', 
      contact: '',
      // password: ''
    });
  };

  const handleRegisterButton = async () => {
    console.log('This is error',details.email)
    try {
      const response = await axios.post('http://3.110.221.63:3000/api/v1/signup', {
        firstName: details.firstName,
        lastName: details.lastName,
        email: details.email,
        // password: details.password, 
        mobileNumber: details.contact,
      });

      console.log('Registration successful:', response.data);
      navigate('/api/v1/conformMail',{state:{email:details.email}});
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <>
      <div className="signUp">
        <span>First Name</span>
        <input
          id="firstName"
          name="firstName"
          type="text"
          value={details.firstName}
          placeholder="First Name"
          onChange={handleFirstName}
          autoComplete="given-name"
        />
        <span>Last Name</span>
        <input
          id="lastName"
          name="lastName"
          type="text"
          value={details.lastName}
          placeholder="Enter Last Name"
          onChange={handleLastName}
          autoComplete="family-name"
        />
        <span>Email</span>
        <input
          id="email"
          name="email"
          type="email"
          value={details.email}
          placeholder="Enter your email"
          onChange={handleEmail}
          autoComplete="email"
        />
        <span>Mobile Number</span>
        <input
          id="mobileNumber"
          name="mobileNumber"
          type="tel"
          value={details.contact}
          placeholder="Enter Mobile Number"
          onChange={handleContact}
          autoComplete="tel"
        />
        {/* Uncomment if password is required */}
        {/* <span>Password</span>
        <input
          id="password"
          name="password"
          type="password"
          value={details.password}
          placeholder="Enter Password"
          onChange={handlePassword}
          autoComplete="new-password"
        /> */}
        <div className='button'>
          <Button className='CancelButton' onSelect={handleCancelButton}>
            Cancel
          </Button>
          <Button className='signUpButton' onSelect={handleRegisterButton}>
            Register
          </Button>
        </div>
      </div>
    </>
  );
};

export default SignUp;















