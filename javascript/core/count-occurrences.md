# Count Occurrences

```js
export const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
```

<script setup>
import { ref } from 'vue'
const input = ref('1,2,3,3,5,2,9,8,5')
const occurrent = ref('5')
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

</script>
## Demo

<input v-model="input" class="input" placeholder="input here" />
<input v-model="occurrent" class="input mt-15" placeholder="input here" />

<p>Result: {{countOccurrences(input.split(','), occurrent)}}</p>
