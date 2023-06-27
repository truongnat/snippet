# Array To CSV

```js
const arrayToCSV = (arr, delimiter = ',') =>
    arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');

```

<script setup>
import { ref } from 'vue'
const message = ref("[['a', 'b'], ['c', 'd']]")
const delimiter = ref(';')
const arrayToCSV = (arr, delimiter = ',') =>
    arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');

const getValue = () => {
    return eval(message.value)
}
</script>


## Demo

<input v-model="message" class="input" placeholder="input here" />
<input v-model="delimiter" class="input mt-15" placeholder="input delimiter here" />

<p>Result is: {{ arrayToCSV(getValue(),delimiter) }}</p>
