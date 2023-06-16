# camelCase.js

```js
export const toCamelCase = str => str.replace(/[\._-\s]+(.)?/g, (_, m) => (m ? m.toUpperCase() : ''));

```

<script setup>
import { ref } from 'vue'

const toCamelCase = str => str.replace(/[\._-\s]+(.)?/g, (_, m) => (m ? m.toUpperCase() : ''));
const message = ref('')
</script>


## Demo

<input v-model="message" class="input" placeholder="input here" />

<p>Result is: {{ toCamelCase(message) }}</p>