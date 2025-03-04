# Welcome to Allbibek

Hi there 👋 Welcome to our documentation site! Let's explore some of the amazing features that VitePress offers.

## Getting Started

VitePress is a Static Site Generator (SSG) designed to help you create beautiful documentation sites with minimal effort. Here's why it's awesome:

- 🖍 **Markdown-Centered** - Focus on writing content in Markdown
- ⚡ **Lightning Fast** - Powered by Vite for instant development
- 🎨 **Customizable** - Easy to theme and extend
- 🔧 **Developer Friendly** - Great DX out of the box

## Markdown Features

### Code Blocks

```js
// Here's some JavaScript code
function greet(name) {
  return `Hello, ${name}!`;
}
```

```python
# And some Python
def greet(name):
    return f"Hello, {name}!"
```

### Tables

| Feature   | Description                      |
|-----------|----------------------------------|
| Fast      | Built on top of Vite            |
| Flexible  | Use Vue components in Markdown  |
| Simple    | Minimal configuration needed    |

### Custom Containers

::: tip
This is a tip - useful for highlighting important information!
:::

::: warning
This is a warning - use it to prevent common mistakes.
:::

::: danger
This is a danger zone - perfect for critical warnings.
:::

::: details Click me to view more
Here's some hidden content that users can reveal by clicking!
:::

## Using Vue in Markdown

VitePress allows you to use Vue directly in your Markdown files. Here's a simple counter example:

```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button @click="count++">Count is: {{ count }}</button>
</template>
```

## Emoji Support

VitePress comes with emoji support! 🎉

- 🚀 Fast development
- 💡 Smart features
- 🎨 Beautiful themes
- 🔧 Easy configuration

## Lists

### Unordered Lists

- First item
- Second item
  - Nested item 1
  - Nested item 2
- Third item

### Ordered Lists

1. First step
2. Second step
   1. Sub-step one
   2. Sub-step two
3. Third step

## Links and References

- [VitePress Documentation](https://vitepress.dev/)
- [Vue.js](https://vuejs.org/)
- [Vite](https://vitejs.dev/)

## Images

You can add images like this:

![VitePress Logo](https://vitepress.dev/vitepress-logo-large.webp)

## Keyboard Keys

Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.

## Text Formatting

- **Bold text** for emphasis
- *Italic text* for slight emphasis
- ~~Strikethrough~~ for deleted text
- `inline code` for code references
- <mark>Highlighted text</mark> for important points

## Quotes

> "VitePress is amazing for documentation sites!"
> 
> — Happy Developer

## Math Equations

```
$$
f(x) = \int_{-\infty}^\infty
    \hat f(\xi)\,e^{2 \pi i \xi x}
    \,d\xi
$$
```
When enabled, you can write math equations:

$$
f(x) = \int_{-\infty}^\infty
    \hat f(\xi)\,e^{2 \pi i \xi x}
    \,d\xi
$$

## Final Thoughts

This page demonstrates many of VitePress's features, but there's even more to explore! Check out the [official documentation](https://vitepress.dev/) to learn about all the possibilities.