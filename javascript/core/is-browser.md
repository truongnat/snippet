# Is Browser

```js
const isBrowser = () => ![typeof window, typeof document].includes('undefined');

```

## Demo

```js
isBrowser(); // true (browser)
isBrowser(); // false (Node)
```