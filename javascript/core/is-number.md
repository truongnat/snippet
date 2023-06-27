# Is Number

```js
const isNumber = n => !isNaN(parseFloat(n)) && isFinite(n);
```

## Demo

```js
isNumber('1'); // false
isNumber(1); // true
```