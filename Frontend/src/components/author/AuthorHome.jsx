import React from 'react'
import { useParams } from 'react-router';
import { UserFactory } from '../../model/user/UserFactory';
const AuthorHome = () => {
    const authorUser= UserFactory.getInstance().getUser();
  return (
    <div>
      <h1>Hello {authorUser.getFirstName()}!</h1>
    </div>
  )
}

export default AuthorHome
