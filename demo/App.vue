<template>
  <vn-scroll-area>
    <HelloWorld>
      <template v-slot:header>
        <vn-text>Here might be a page title</vn-text>
      </template>
      <vn-text>Default slot hello content</vn-text>
    </HelloWorld>
  </vn-scroll-area>
</template>

<script>
import HelloWorld from "./Header";

export default {
  components: {
    HelloWorld: HelloWorld,
  },
};
</script>
