import React from 'react'
import { useParams } from 'react-router';
import { UserFactory } from '../../model/user/UserFactory';
import AuthorNavBar from './AuthorNavBar';
import './index.css';
import AuthorArticles from './AuthorArticles';
const AuthorHome = () => {
    const authorUser= UserFactory.getInstance().getUser();
  return (
    <div style={{height:'100%', backgroundColor:'#DDDDDD'}}>
      <AuthorNavBar firstName={authorUser.getFirstName()}/>
      <AuthorArticles />
    </div>
  )
}

export default AuthorHome
