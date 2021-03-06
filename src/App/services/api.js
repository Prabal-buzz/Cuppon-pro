import axios from "axios";
import Cookies from "js-cookie";

export default class Api {
  constructor(setToken = true) {
    this.axiosFunction = axios.create({
      baseURL: (process.env.REACT_APP_API_BASE_URL || "") + "/api/v1/",
    });
    if (setToken) {
      this.setToken();
    }
  }
  setToken = () => {
    this.axiosFunction.interceptors.request.use(
      config => {
        config.headers["Authorization"] = "JWT " + Cookies.get('token');
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  };

  get = (url, data) => {
    return this.axiosFunction
      .get(url, { params: data })
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
  };

  post = (url, data, headers = null) => {
    if (headers) {
      for (const header in headers) {
        if (headers[header]) {
          this.axiosFunction.defaults.headers[header] = headers[header];
        }
      }
    }
    return this.axiosFunction
      .post(url, data)
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
  };

  put = (url, data) => {
    return this.axiosFunction
      .put(url, data)
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
  };

  delete = (url) => {
    return this.axiosFunction
      .delete(url)
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
  };

  getJSONToQueryStr = (jsonData = {}) =>
    Object.keys(jsonData)
      .map((k) => k + "=" + jsonData[k])
      .join("&");
}
