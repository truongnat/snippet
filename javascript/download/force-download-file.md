---
next: false
---

# Download file

```js
const forceDownloadFile = (url) => {
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = url;
  anchor.style.display = "none";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
};
```

<script setup>
import { ref } from 'vue'

const link = ref('')

const forceDownloadFile = (url) => {
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = url;
  anchor.style.display = "none";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
};

</script>


## Demo

<input v-model="link" class="input mt-15" placeholder="enter link file here" />

<button @click="forceDownloadFile(link)">Click to download!</button>
