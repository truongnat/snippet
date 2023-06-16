# Flatten

```js
export const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);
```

<script setup>
import { ref } from 'vue'

const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), [])
  const demo = ref([1, [2, [3, [4, 5], 6], 7], 8])
</script>

## Demo

```js
  const demo = [1, [2, [3, [4, 5], 6], 7], 8]

flatten(demo,2)
```

<p>Result: {{flatten(demo,2)}}</p>
