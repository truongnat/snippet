# Copy Image

> only mine/type = image/png

```js
const copyImageToClipboard = async (imageElement) => {
  let canvas = document.createElement("canvas");
  canvas.width = imageElement.width;
  canvas.height = imageElement.height;
  let ctx = canvas.getContext("2d");
  ctx.drawImage(imageElement, 0, 0);

  const dataURL = canvas.toDataURL();
  try {
    const blob = await (await fetch(dataURL)).blob();
    navigator.clipboard.write([
      new ClipboardItem({
        "image/png": blob,
      }),
    ]);
  } catch (err) {
    console.log(err);
  }
};
```

<script setup>
import { ref } from 'vue'

const isCopied = ref(false)
const file = ref(null)
const previewURL = ref('')

const copyImageToClipboard = async (imageElement) => {
  let canvas = document.createElement("canvas");
  canvas.width = imageElement.width;
  canvas.height = imageElement.height;
  let ctx = canvas.getContext("2d");
  ctx.drawImage(imageElement, 0, 0);

  const dataURL = canvas.toDataURL();
  try {
    const blob = await (await fetch(dataURL)).blob();
    navigator.clipboard.write([
      new ClipboardItem({
        "image/png": blob,
      }),
    ]);
    isCopied.value = true
  } catch (err) {
    isCopied.value = false
    console.log(err)
  }  
};

function onFileChanged(event) {
   const file = event.target.files[0];
    if (file && file.type === 'image/png') {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewURL = reader.result;
      };
      reader.readAsDataURL(file);
    }
}

</script>

## Demo

<input type="file" @change="onFileChanged($event)" accept="image/png"/>
<button @click="copyImageToClipboard(this.$refs.file)">Click to copy image!</button>
<br/>
<div class="mt-15" v-if="previewURL">
  <img ref="file" :src="previewURL" alt="Preview" />
</div>

<p>Result is: {{isCopied}}</p>
