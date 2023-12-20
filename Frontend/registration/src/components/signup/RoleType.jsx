import React from 'react'
import { ROLES } from '../../constants';

const RoleType = () => {
  return (
    <div className='sign-up-form-row' style={{justifyContent:'flex-start', alignContent:'center'}}>
        <div >
        <span style={{fontSize:'large', fontWeight:400}}>What is your job?</span>
        </div>
        <div style={{paddingLeft:20, display:'flex'}}>
        {ROLES.map((role)=>{
            return (
            <div style={{margin:20, justifyContent:'space-between'}}>
            <label style={{margin:10}}>{role}</label>
            <input type="radio" name='role' value={role}/>
            </div >
            );
        })}
        </div>
    </div>
  )
}

export default RoleType
