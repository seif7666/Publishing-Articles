import axios_api from "./axios";
import { AuthorArticle } from "../model/user/AuthorArticle";
import { ARTICLE_STATES, SERVICE } from "../constants";

export class AuthorService {
  static async getArticleHeaders(user_id, type, pageNumber) {
    console.log(user_id);
    return new Promise(async (resolve, reject) => {
      try {
        const data = await axios_api.get(SERVICE.AUTHOR_GET_ARTICLE_HEADERS+"/"+user_id);
        console.log(data.data);
        resolve(data.data);
      } catch (error) {
        reject("Server not found!");
      }
    });
  }
  static async createArticle(user_id, article) {
    const body = { title: article.title, body: article.body, written_by:user_id, type:ARTICLE_STATES.PENDING };
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios_api.post(
          SERVICE.AUTHOR_CREATE_ARTICLE,
          body
        );
        if (response.status == 200) resolve("Success");
        else {
          console.log(response);
          reject(response.status);
        }
      } catch (error) {
        console.log(error);
        reject("An error occured!");
      }
    });
  }
}
