import { Z_PAIR_URL } from './../constants';
import APIConnector from '../utils/api-connector';
import { APIError } from '../interfaces';

interface Pair {
  symbol: string;
  base: string;
  quote: string;
  isEnabled: boolean;
  tradeStatus: boolean;
}
interface GetPairResponse {
  data: Pair[];
}

const getPair = async (apiKey: string): Promise<GetPairResponse | APIError> => {
  const connector = new APIConnector({ apiKey });

  const { data } = await connector.get(`${Z_PAIR_URL}`);
  return data;
};

export default getPair;
