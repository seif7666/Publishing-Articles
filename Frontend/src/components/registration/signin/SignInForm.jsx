import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { LINKS } from '../../../constants';

const SignInForm = () => {
    const [username,setUsername]= useState('');
    const [password,setPassword]= useState('');
    const [errorMessage,setErrorMessage]= useState('');
    const navigate= useNavigate();

    const signIn=(e)=>{
        e.preventDefault();
        setErrorMessage('Error!');
        console.log(username);
        if(username.length > 0)
            navigate(LINKS.SIGNUP);
    }
  return (
    <div id='form-div'>
        <form>
            <div className='form-group'>
                <input type='email' className='form-control sign-in' placeholder='Username' onChange={(e)=>setUsername(e.target.value)}/>
                <input type='password' className='form-control sign-in' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button type="submit" class="btn btn-primary" onClick={signIn}>Submit</button>
        </form>
        <div>
            <p className='text-danger'>{errorMessage}</p>
        </div>
        <div id='sign-up-div'>
            <p className='h6'>This is your first time? <span>SignUp</span></p>
        </div>
    </div>
  )
}

export default SignInForm
