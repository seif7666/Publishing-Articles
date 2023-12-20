import React, { useState } from 'react'

const SignInForm = () => {
    const [username,setUsername]= useState('');
    const [password,setPassword]= useState('');
    const [errorMessage,setErrorMessage]= useState('');

    const signIn=(e)=>{
        e.preventDefault();
        setErrorMessage('Error!')
    }
  return (
    <div id='form-div'>
        <form>
            <div className='form-group'>
                <input type='email' className='form-control' placeholder='Username' onChange={(e)=>setUsername(e.target.value)}/>
                <input type='password' className='form-control' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
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
