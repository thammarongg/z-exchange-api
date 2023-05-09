import { ZExchangeAPI } from './../src/index';

const api = new ZExchangeAPI({ apiKey: 'xxxxx-xxxxx-xxxxx-xxxxx' }); // your api key
async function getPair() {
  const response = await api.getPair();
  console.log(response);
}
getPair();
