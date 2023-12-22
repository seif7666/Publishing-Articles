import axios_api from "./axios";
import { AuthorArticle } from "../model/user/AuthorArticle";

export class AdminService {
  static async getArticleHeaders(pageNumber) {
    return new Promise(async (resolve, reject) => {
      try {
        // const body = { type: type, pageNumber: pageNumber };
        const data = await axios_api.get("articles"); // /admin/articles
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
          console.log(response);
          resolve({
            body: "<p>This is a sample <strong>text</strong>",
            title: "Mock Test",
          });
          // reject(response.status);
        }
      } catch (error) {
        // console.log(error);
        // reject("An error occured!");
        resolve({
          body: "<p>This is a sample <strong>text</strong>",
          title: "Mock Test",
        });
      }
    });
  }
}
