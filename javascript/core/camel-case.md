# Camel Case

```js
export const toCamelCase = str => str.replace(/[\._-\s]+(.)?/g, (_, m) => (m ? m.toUpperCase() : ''));

```

<script setup>
import { ref } from 'vue'
const message = ref('')
const toCamelCase = str => str.replace(/[\._-\s]+(.)?/g, (_, m) => (m ? m.toUpperCase() : ''));

</script>


## Demo

<input v-model="message" class="input" placeholder="input here" />

<p>Result is: {{ toCamelCase(message) }}</p>