# Difference

```js
export const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};
```

<script setup>
import { ref } from 'vue'

const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

</script>

## Demo

```js
  const input1 = [1, 2, 3];
  const input2 = [1, 2, 4];
  difference([1, 2, 3], [1, 2, 4]); // [3]
```

<p>Result is: {{ difference([1, 2, 3], [1, 2, 4]) }}</p>
