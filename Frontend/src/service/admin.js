import axios_api from "./axios";
import { AuthorArticle } from "../model/user/AuthorArticle";

export class AdminService {
  static async getArticleHeaders( pageNumber) {
    return new Promise(async (resolve, reject) => {
      try {
        // const body = { type: type, pageNumber: pageNumber };
        const data = await axios_api.get("articles");// /admin/articles
        resolve(data.data);
      } catch (error) {
        console.log(error);
        reject("Server not found!");
      }
    });
  }
  }
