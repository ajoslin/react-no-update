# react-no-update [![Build Status](https://travis-ci.org/ajoslin/react-no-update.svg?branch=master)](https://travis-ci.org/ajoslin/react-no-update)

> shouldComponentUpdate false for react w/ a render prop

## Install

```
$ npm install --save react-no-update
```

## Usage

```js
var NoUpdate = require('react-no-update')

<NoUpdate render={() => <div>I won't update</div>} />
```

## License

MIT © [Andrew Joslin](http://ajoslin.com)
