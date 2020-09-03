---
id: 6-images
sidebar_label: Images
title: Images
---

Images are very important for making your app more interesting.

In Vue NodeGui, `<vn-image>` is used to display an image.

Internally Image is a QLabel. QLabel is typically used for displaying text, but it can also display an image.
What this means is that you can pass all the props you pass to a `<vn-text>` to `<vn-image>` also.

### Example

Let's take a simple example of displaying your logo in the app:

![simple image example](/img/image-simple.png)

The code for this would look as below:

```html
<template>
  <vn-image src="https://docs.nodegui.org/img/logo-circle.png"></vn-image>
</template>

<script>
export default {}
</script>
```

### Animated images

For animated images, the widget `vn-animated-image` is still under construction.

### Loading an image from a buffer

Lets say we want to load an image from a buffer. In this case we can't use the `src` prop since its only reserved for local file system path or urls.

In this case use the `buffer` prop.
