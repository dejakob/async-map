# async-map

[![Build Status](https://travis-ci.org/dejakob/async-map.svg?branch=master)](https://travis-ci.org/dejakob/async-map)
[![NPM](https://img.shields.io/npm/v/alegrify-async-map/latest.svg?label=npm)](https://npmjs.com/package/alegrify-async-map)

Array.prototype.map, but with async callbacks

## Usage

```js
const asyncMap = require('alegrify-async-map');

const items = [1, 2, 3];
const filteredItems = asyncMap(items, async (element, index, array) => {
  return await someAsyncMethod(element);
});
```
