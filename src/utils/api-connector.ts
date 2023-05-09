import { API_BASE_URL } from './../constants';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

interface APIOptions {
  apiKey: string | undefined;
}

export default class APIConnector {
  private apiKey: string | undefined;
  private instance: AxiosInstance;

  constructor(options: APIOptions) {
    this.apiKey = options.apiKey;
    this.instance = axios.create({
      baseURL: `${API_BASE_URL}`,
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': this.apiKey,
      },
      validateStatus: () => true,
    });
  }

  async get(url: string, params?: object): Promise<AxiosResponse<any>> {
    return await this.instance.get(url, { params });
  }

  async post(url: string, params?: object): Promise<AxiosResponse<any>> {
    return await this.instance.post(url, { ...params });
  }
}
