// Consatns //
import { API_URL, BASE_URL } from "./api.constants";

export class APIService {
  public static getWakandaCandidates = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(
      BASE_URL + API_URL.getWakandaCandidates,
      requestOptions
    );
    return await response.json();
  };
}
