# Format File Size

```js
const formatFileSize = (size) => {
  if(!size){
    return '0 B'
  }
  let i = Math.floor(Math.log(size) / Math.log(1024));

  return `${(size / Math.pow(1024, i)).toFixed(1)} ${
    ["B", "KB", "MB", "GB", "TB"][i]
  }`;
};
```

<script setup>
import { ref } from 'vue'
const size = ref('')

const formatFileSize = (size) => {
  if(!size){
    return '0 B'
  }
  let i = Math.floor(Math.log(size) / Math.log(1024));

  return `${(size / Math.pow(1024, i)).toFixed(1)} ${
    ["B", "KB", "MB", "GB", "TB"][i]
  }`;
};

</script>

## Demo

<input v-model="size" class="input" placeholder="input size here" type="number" />

<p>Result is: {{ formatFileSize(parseInt(size)) }}</p>
