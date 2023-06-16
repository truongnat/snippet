# Byte Size

```js
const byteSize = str => new Blob([str]).size;
```

## Demo

```js
byteSize('😀'); // 4
byteSize('Hello World'); // 11
```