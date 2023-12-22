import axios_api from "./axios";

export class SignInService{

    static async signInAndGetUser(username,password) {
        return new Promise(async (resolve,reject)=>{
            try {
                const response=await axios_api.get(`users/0`);
                if(response.status===200)    
                    resolve(response.data);
                else{
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