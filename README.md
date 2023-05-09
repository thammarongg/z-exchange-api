# Z.com Exchange API Wrapper

Z.com Exchange API Wrapper

## Installation

Using npm:

```bash
$ npm install --save z-exchange-api
```

## Examples

### Node JS

```js
import { ZExchangeAPI } from 'z-exchange-api';

const api = new ZExchangeAPI({ apiKey: 'xxxxx-xxxxx-xxxxx-xxxxx' }); // your api key
async function logCurrencies() {
  const { currencies } = await api.getCurrencies();
  console.log(currencies);
}
logCurrencies();
```

## Resources

* [Documentation API](https://documenter.getpostman.com/view/7907941/S1a32n38)

## Many Thanks for Inspired

[NowPaymentsIO/nowpayments-api-js](https://github.com/NowPaymentsIO/nowpayments-api-js.git)
