# Random Hex Color

```js
export const randomColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;

```

<script setup>
import { ref } from 'vue'
const color = ref('#000000')
const randomColor = () => {
  color.value = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`
};
</script>


## Demo

<button @click="randomColor">Click to random color</button>

<p>Result is: {{ color }}</p>
<div :style="{ background: color, width: '50px', height: '50px' }"></div>
