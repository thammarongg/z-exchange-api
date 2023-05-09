import ZAPIService from './services';

interface ZAPIExchangeOptions {
  apiKey: string;
}

export class ZExchangeAPI {
  private readonly apiKey: string;

  constructor(options: ZAPIExchangeOptions) {
    this.apiKey = options.apiKey;
  }

  async getPair() {
    return await ZAPIService.getPair(this.apiKey);
  }
}
