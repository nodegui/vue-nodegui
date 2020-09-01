---
id: 3-styling
title: Styling
---

With Vue NodeGui, you can style a component to your needs. If you are familiar with CSS in the web world you would feel right at home. All components accept the style prop for setting inline styles. The style names and values usually match how CSS works on the web.

Here's an example:

```html
<template>
    <vn-view style="viewStyle">
        <vn-text>Hello there! 👋🏽</vn-text>
    </vn-view>
</template>


<script>
    export default {
        setup() {
            return {
                viewStyle: `
                    color: green;
                    background-color: white;
                `
            }
        }
    }
</script>
```

Duis et egestas libero, imperdiet faucibus ipsum. Sed posuere eget urna vel feugiat. Vivamus a arcu sagittis, fermentum urna dapibus, congue lectus. Fusce vulputate porttitor nisl, ac cursus elit volutpat vitae. Nullam vitae ipsum egestas, convallis quam non, porta nibh. Morbi gravida erat nec neque bibendum, eu pellentesque velit posuere. Fusce aliquam erat eu massa eleifend tristique.

Sed consequat sollicitudin ipsum eget tempus. Integer a aliquet velit. In justo nibh, pellentesque non suscipit eget, gravida vel lacus. Donec odio ante, malesuada in massa quis, pharetra tristique ligula. Donec eros est, tristique eget finibus quis, semper non nisl. Vivamus et elit nec enim ornare placerat. Sed posuere odio a elit cursus sagittis.

Phasellus feugiat purus eu tortor ultrices finibus. Ut libero nibh, lobortis et libero nec, dapibus posuere eros. Sed sagittis euismod justo at consectetur. Nulla finibus libero placerat, cursus sapien at, eleifend ligula. Vivamus elit nisl, hendrerit ac nibh eu, ultrices tempus dui. Nam tellus neque, commodo non rhoncus eu, gravida in risus. Nullam id iaculis tortor.

Nullam at odio in sem varius tempor sit amet vel lorem. Etiam eu hendrerit nisl. Fusce nibh mauris, vulputate sit amet ex vitae, congue rhoncus nisl. Sed eget tellus purus. Nullam tempus commodo erat ut tristique. Cras accumsan massa sit amet justo consequat eleifend. Integer scelerisque vitae tellus id consectetur.
