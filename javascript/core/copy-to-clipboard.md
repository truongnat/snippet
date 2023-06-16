# Copy To Clipboard

```js
const copyToClipboard = (text) => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    } else {
      let textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      return new Promise((res, rej) => {
        document.execCommand("copy") ? res() : rej();
        textArea.remove();
      });
    }
  } catch (error) {
    console.error(error);
  }
};
```

<script setup>
import { ref } from 'vue'
const isCopied = ref(false)
const copyToClipboard = (text) => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      isCopied.value = true
      return navigator.clipboard.writeText(text);
    } else {
      let textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      return new Promise((res, rej) => {
        document.execCommand("copy") ? res() : rej();
        textArea.remove();
        isCopied.value = true
      });
    }
  } catch (error) {
    isCopied.value = false
    console.error(error);
  }
}

</script>

## Demo

<button @click="copyToClipboard('Copy success')">Click to copy!</button>

<p>Result is: {{isCopied}}</p>
