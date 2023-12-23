import { SERVICE } from "../constants";
import axios_api from "./axios";

export class SignInService{

    static async signInAndGetUser(username,password) {
        return new Promise(async (resolve,reject)=>{
            try {
                const body={username:username, password:password}
                const response=await axios_api.post(SERVICE.USER_API, body);
                if(response.status===200)    
                    resolve(response.data);
                else{
                    console.log(response);
                    reject('Invalid username or password!');
                }   
            } catch (error) {
                console.log('HERE!!')
                console.log(error.message);
                reject(error.message);
            }
        })
    }
}