import axios_api from "./axios";
import { AuthorArticle } from "../model/user/AuthorArticle";

export class AuthorService {
  static async getArticleHeaders(user_id, type, pageNumber) {
    return new Promise(async (resolve, reject) => {
      try {
        const body = { type: type, pageNumber: pageNumber };
        const data = await axios_api.get("articles", body);
        resolve(data.data);
      } catch (error) {
        reject("Server not found!");
      }
    });
  }
  static async createArticle(user_id, article) {
    const body = { title: article.title, body: article.body };
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios_api.post(
          "/author/article/" + user_id,
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
