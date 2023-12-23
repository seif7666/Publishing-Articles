import axios_api from "./axios";
import { AuthorArticle } from "../model/user/AuthorArticle";
import { SERVICE } from "../constants";

export class AdminService {
  static async getArticleHeaders() {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await axios_api.get(SERVICE.ADMIN_GET_ADMIN_ARTICLES);
        console.log(data.data);
        resolve(data.data);
      } catch (error) {
        console.log(error);
        reject("Server not found!");
      }
    });
  }

  static async getArticle(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios_api.get(SERVICE.ADMIN_ARTICLE + id);
        if (response.status == 200) resolve(response.data);
        else {
          // console.log(response);
          reject(response.status);
        }
      } catch (error) {
        console.log(error);
        reject("An error occured!");
        
      }
    });
  }

  static acceptArticle(articleId){
    return new Promise(async(resolve,reject)=>{
      try{
        const response=await axios_api.put(SERVICE.ADMIN_ARTICLE+articleId);
        if(response.status===200)
          resolve('Success')
        else 
          reject(response.data); 
      }catch(e){
        reject(e);
      }
    })
  }

  static rejectArticle(articleId, body){
    return new Promise(async(resolve,reject)=>{
      try{
        console.log(SERVICE.ADMIN_ARTICLE+articleId);
        const response=await axios_api.post(SERVICE.ADMIN_ARTICLE+articleId,body, {headers:{'Access-Control-Allow-Origin': '*',"Content-Type":'application/json'}});
        if(response.status==200)
          resolve('Success');
        else
          reject(response.data);
      }catch(e){
        reject(e);
      }
    })
  }
}
