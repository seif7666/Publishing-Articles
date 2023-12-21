import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { LINKS, ROLES } from '../../../constants';
import { Link } from 'react-router-dom';
import { services } from '../../../service/signIn';

const SignInForm = () => {
    const [username,setUsername]= useState('');
    const [password,setPassword]= useState('');
    const [errorMessage,setErrorMessage]= useState('');
    const navigate= useNavigate();

    const signIn=(e)=>{
        e.preventDefault();
        services.signInService.signInAndGetUser(username,password).then((user)=>{
            navigate('/'+user.role,{user:user});
        }).catch((message)=>{
            setErrorMessage(message);
        })
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
            <p className='h6'>This is your first time? 
            <Link to={LINKS.SIGNUP}>
            <span>SignUp</span>
            </Link>
            </p>
        </div>
    </div>
  )
}

export default SignInForm
