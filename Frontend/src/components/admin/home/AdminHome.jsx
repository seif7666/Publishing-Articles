import React, { useEffect, useState } from 'react'
import '../index.css';
import AdminNavBar from '../AdminNavbar'
import {UserFactory} from '../../../model/user/UserFactory';
import { services } from '../../../service/services';
import Loading from '../../Loading';
import { AdminArticle } from '../../../model/admin/AdminArticle';
import { useNavigate } from 'react-router';
import { LINKS } from '../../../constants';

const ArticlesTable=()=>{
    const [articles,setArticles]= useState([]);
    const [isLoading,setLoading]= useState(true);
    const navigation= useNavigate();
    useEffect(()=>{
        const newArticles=[];
        services.adminServices.getArticleHeaders().
        then((response)=>{
            console.log(response);
            response.forEach((res)=>{
                console.log(res);
                newArticles.push(new AdminArticle(res.id,res.title,res.created_at,res.firstName+","+res.lastName));
            }
            )
            setArticles(newArticles);
            setLoading(false);   
        })
        .catch((rejection)=>console.log(rejection));
    },[])
    if(isLoading) return <Loading />
    return (
        <>
        {articles.map((article)=>{
            return(
            <div className="admin-article-header" onClick={(e)=>navigation(LINKS.EDIT_ARTICLE+"/"+article.Id)}>
                <div>
                    {article.writtenBy}
                </div>
                <div>
                    {article.title}

                </div>
                <div>
                    {article.created_date}
                </div>

            </div>
        )})}
        </>
    )
}

const ReviewsTable=()=>{
    return (
    <div>
        <Loading />
    </div>)
}
const AdminHome = () => {
    const admin= UserFactory.getInstance().getUser();
    const elements=[["Pending Articles",<ArticlesTable/>], ["Pending Reviews",<ReviewsTable/>]]
  return (
    <div>
      <AdminNavBar firstName={admin.getFirstName()}/>
      <div style={{display:'flex', justifyContent:'space-between', width:'100%', margin:10,marginTop:20}}>
        {elements.map((e)=>(
            <div className='admin-table-div'>
                <h3>{e[0]}</h3>
                <section className='admin-table-section'>
                    {e[1]}
                </section>
            </div>
        )
        )}
      </div>
    </div>
  )
}

export default AdminHome
