import React from 'react';
import { UserFactory } from '../../../model/user/UserFactory';
import AuthorNavBar from '../AuthorNavBar'
import CreateEditor from './CreateEditor';

const CreateArticle = () => {
  const user= UserFactory.getInstance().getUser();
  return (
    <div>
        <AuthorNavBar firstName={user.getFirstName()}/>
        {/* <CreateEditor /> */}
    </div>
  )
}

export default CreateArticle
