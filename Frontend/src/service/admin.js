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
        const response = await axios_api.get("/admin/article/" + id);
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
}
