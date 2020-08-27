# find-last-index [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/find-last-index/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/find-last-index)

Like Array#findIndex but searches the array backwards.

[![NPM Badge](https://nodei.co/npm/find-last-index.png)](https://npmjs.com/package/find-last-index)

## Install

```sh
npm install find-last-index
```

## Usage

```js
const findLastIndex = require("find-last-index");

findLastIndex(["a", "b", "bba", "cc", "d"], value => value.includes("a"));
//=> 2
```

## API

### findLastIndex(array, predicate)

#### array

Type: `array`

The array to search.

#### predicate

Type: `(item, index, array) => boolean`

The predicate function to call on each item.
