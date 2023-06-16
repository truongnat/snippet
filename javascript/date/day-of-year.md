# Day Of Year

```js
export const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
```

<script setup>
import { ref } from 'vue'

const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

</script>


## Demo


<p>Result is: {{ dayOfYear(new Date()) }}</p>