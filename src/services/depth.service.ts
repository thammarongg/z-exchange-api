import { Z_DEPTH_URL } from './../constants';
import APIConnector from '../utils/api-connector';
import { APIError } from '../interfaces';

interface Bid {
  price: number;
  quatiy: number;
}
interface Ask {
  price: number;
  quatiy: number;
}

interface GetDepthResponse {
  symbol: string;
  bids: Bid[];
  asks: Ask[];
  timestamp: number;
}

interface GetDepthRequest {
  apiKey: string;
  symbol: string;
  limit?: number;
}

const getDepth = async (
  request: GetDepthRequest,
): Promise<GetDepthResponse | APIError> => {
  const connector = new APIConnector({ apiKey: request.apiKey });

  const { data } = await connector.get(`${Z_DEPTH_URL}`, {
    symbol: request.symbol,
    limit: request.limit || 0,
  });
  return data;
};

export default getDepth;
