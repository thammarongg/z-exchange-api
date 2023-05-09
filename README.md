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
async function getPair() {
  const response = await api.getPair();
  console.log(response);
}
getPair();
```

## Resources

- [Documentation API](https://ex.z.com)
