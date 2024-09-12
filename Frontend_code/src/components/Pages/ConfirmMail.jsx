import React,{useState} from 'react'
import Button from '../Container/Button'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const ConfirmMail = () => {
    const navigate=useNavigate();
    const location=useLocation();
    const {email} =location.state || {};

    const [reset,setReset]=useState({
        email:email || '',
    })

    const handleResetButton=()=>{
        navigate('/api/v1/signUp');
       
        
    }
    const handleConfirmButton=async ()=>{
        try{
            const response= await axios.post('http://3.110.221.63:3000/api/v1/conformMail',{
                email:reset.email
            });
            console.log('Confirmation sent: ', response.data);

            navigate('/api/v1/SentMail',{state:{email:reset.email}});
        }
        catch(error){
            console.error('Error During confirmation:',error);
        }
    }
  return (
    <div>
        <h3>Email Confirmation</h3>
        <input type="text" value={email || reset.email} readOnly/>
        <Button className='cancelButton' onSelect={handleResetButton}>
        Reset
        </Button>
        <Button className='confirmButton' onSelect={handleConfirmButton}>
        Confrim
        </Button>
        
    </div>
  )
}

export default ConfirmMail