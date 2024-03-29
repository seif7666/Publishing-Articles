import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { LINKS, ROLES } from '../../../constants';
import { Link } from 'react-router-dom';
import { UserFactory } from '../../../model/user/UserFactory';
import { services } from '../../../service/services';

const AreUserNameAndPasswordValid=(username, password)=>{
    if(username.trim().length===0){
        alert('Username field is empty!');
        return false;
    }
    if(password.trim().length===0){
        alert('Password field is empty!');
        return false;
    }
    return true;
}
const SignInForm = () => {
    const [username,setUsername]= useState('');
    const [password,setPassword]= useState('');
    const [errorMessage,setErrorMessage]= useState('');
    const navigate= useNavigate();
 
    const signIn=(e)=>{
        e.preventDefault();
        if(!AreUserNameAndPasswordValid(username,password))
            return;
        services.signInService.signInAndGetUser(username,password).then((user)=>{
            UserFactory.getInstance().createUser(user);
            navigate('/'+UserFactory.getInstance().getUser().getRole());
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
            <button type="submit" class="btn btn-primary"style={{padding:10, fontSize:20, backgroundColor:'#aa2200'}} id='sign-in-btn' onClick={signIn}>Sign In</button>
            </div>
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
