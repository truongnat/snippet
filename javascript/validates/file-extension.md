---
next: false
---

# File extension

```js
let allowedFiles = [".xlsx", ".csv"];
new RegExp("([a-zA-Z0-9s_\\.-:])+(" + allowedFiles.join("|") + ")$");
```

<script setup>
import { ref } from 'vue'

const toCamelCase = str => str.replace(/[\._-\s]+(.)?/g, (_, m) => (m ? m.toUpperCase() : ''));
const message = ref('')
const extension = ref('xlsx,csv')

const formattedAllowedFiles = extension.value.split(',').map(t => `.${t}`);


</script>


## Demo
<input v-model="extension" class="input" placeholder="extension" />

<input v-model="message" class="input mt-15" placeholder="input here" />

<p>Result is: {{ new RegExp("([a-zA-Z0-9s_\\.-:])+(" + formattedAllowedFiles.join("|") + ")$").test(message) }}</p>