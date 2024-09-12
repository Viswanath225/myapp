import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SentMail = () => {

  return (
    <div>
      <h3>Verification Email Sent</h3>
      <p>
        We have sent an email to your inbox. Please check your email (and your spam/junk folder) to proceed.
      </p>
    </div>
  );
};

export default SentMail;











// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate, useLocation } from 'react-router-dom';

// const SentMail = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
 

// //   console.log("This is email ",email);
//   const [verificationLink, setVerificationLink] = useState('');

//   useEffect(() => {
//     const sendVerificationMail = async () => {
//         const email  = location.state?.email
//         if (!email) {
//           console.error('Email is missing');
//           return;
//         }
//         console.log("This is email ",email)
//       try {
//         const res = await axios.post('http://localhost:3000/api/v1/verify', { email });

//         const { verificationLink } = res.data;
//         setVerificationLink(verificationLink);

//         console.log('Verification link:', verificationLink);

//         // Navigate to the password reset page using the token in the verification link
//         const urlParams = new URLSearchParams(new URL(verificationLink).search);
//         const token = urlParams.get('token');

//         if (token) {
//           navigate(`/api/v1/set-password?token=${token}`);
//         } else {
//           console.error('Token is missing from the verification link');
//         }
//       } catch (error) {
//         console.error('Error sending verification email:', error);
//       }
//     };

//     if (email) {
//       sendVerificationMail();
//     } else {
//       console.error('Email is missing');
//     }
//   }, [navigate, email]);

//   return (
//     <div>
//       <h3>Verification Email Sent</h3>
//       <p>
//         We have sent an email to your inbox. Please check your email (and your spam/junk folder) to proceed.
//       </p>
//       {verificationLink && (
//         <p>
//           If you don't receive an email, <a href={verificationLink}>click here to resend</a>.
//         </p>
//       )}
//     </div>
//   );
// };

// export default SentMail;














// import React, { useEffect } from 'react';
// // const { v4: uuidv4 } = require("uuid");
// // import { v4 as uuidv4 } from 'uuid';
// import axios from 'axios';

// // import uuidv4 from 'uuid';
// import { useNavigate } from 'react-router-dom';

// const SentMail = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     // const token = localStorage.getItem('resetToken');
//     const res=axios.get('http://localhost:3000/api/v1/verify');
//     const {token}=res.query;
//     console.log("Token is already get :", token);

//     if (token) {
//         console.log('Token Verified')
//       navigate(`/api/v1/set-password?token=${token}`);
//     } else {
//       console.error('Token is missing');
//     }
//   }, [navigate]);

//   return (
//     <div>
//       <h3>Verification Email Sent</h3>
//       <p>
//         We have sent an email to your inbox. Please check your email (and your spam/junk folder) to proceed.
//       </p>
//     </div>
//   );
// };

// export default SentMail;

















// import React from 'react'

// const SentMail = () => {
//   return (
//     <div>
//         "We Have sent an email to your inbox. Please Check your email (and your spam/junk folder) to proceed."
//     </div>
//   )
// }

// export default SentMail