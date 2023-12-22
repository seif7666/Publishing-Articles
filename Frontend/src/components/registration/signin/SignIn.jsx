import React from 'react'
import './index.css'
import Title from './Title'
import SignInForm from './SignInForm'

const SignIn = () => {
  console.log('IN Sign In!')
  return (
    <div>
        <Title />
        <SignInForm />
    </div>
  )
}

export default SignIn
