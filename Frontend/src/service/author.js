import axios_api from "./axios";

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
}
