import axios, { AxiosInstance } from "axios";
import { API_BASE_URL, VOTING_USER_BASE_URI } from "./config"
import { errorToast } from "./toastify"
let is401ToastDisplayed = false
interface DataServiceOptions {
  token?: string;
}
// Config axios
export const api: AxiosInstance = axios.create({
  baseURL: `${VOTING_USER_BASE_URI}`,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  timeout: 20000,
});
// Class containing REST methods
class DataService {
  constructor(private options: DataServiceOptions = {}) {
    if (options.token) {
      this.setToken(options.token);
    }
    // Set Content-Type to application/json by default
    this.setContentType("application/json");

    // Add request interceptor
    api.interceptors.request.use(
      (config) => {
        // Modify config as needed
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Add response interceptor
    api.interceptors.response.use(
      (response) => {
        // Modify response as needed
        return response;
      },
      async (error) => {
        const { status } = error.response;
        if ([401, 404, 409, 400, 500].includes(status)) {
          console.log('unauthorized')
          errorToast(error)
          throw error;
        } else if (status === 403 && !is401ToastDisplayed) {
          is401ToastDisplayed = true;
          errorToast("Token Expired. Please Login to Continue");
          setTimeout(() => {
            localStorage.removeItem("persist:curry_heaven_admin");
            window.location.href = "/";
          }, 2000);
        }
        throw error;
      }
    );
  }
  setToken(token: string) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
  setContentType(type: string) {
    api.defaults.headers.common["Content-Type"] = type;
  }
  setApiKey(apiKey: string) {
    api.defaults.headers.common["x-api-key"] = `Bearer ${apiKey}`;
  }
  clearToken() {
    delete api.defaults.headers.common["Authorization"];
  }

  clearApiKey() {
    delete api.defaults.headers.common["x-api-key"];
  }

  async getData(endpoint: string, token?: string) {
    try {
      if (token) {
        this.setToken(token);
      }
      const response = await api.get(endpoint);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async postData(endpoint: string, data: any, token?: string) {
    try {
      if (token) {
        this.setToken(token);
      }
      const response = await api.post(endpoint, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  async putData(endpoint: string, data: any, token?: string) {
    try {
      if (token) {
        this.setToken(token);
      }
      const response = await api.put(endpoint, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  async patchData(endpoint: string, data?: any, token?: string) {
    try {
      if (token) {
        this.setToken(token);
      }
      const response = await api.patch(endpoint, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  async deleteData(endpoint: string, token?: string) {
    try {
      if (token) {
        this.setToken(token);
      }
      const response = await api.delete(endpoint);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  async postFormData(endpoint: string, formData: FormData, token?: string) {
    try {
      if (token) {
        this.setToken(token);
      }
      const response = await api.post(endpoint, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  async putFormData(endpoint: string, formData: FormData, token?: string) {
    try {
      if (token) {
        this.setToken(token);
      }
      const response = await api.post(endpoint, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default DataService;
export const dataService = new DataService()
