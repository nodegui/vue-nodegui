<template>
  <HelloWorld>
    <template v-slot:header>
      <p>Here might be a page title</p>
    </template>
    <p>Default slot hello content</p>
  </HelloWorld>
</template>

<script>
import HelloWorld from './Header';

export default {
  components: {
    HelloWorld: HelloWorld
  }
}
</script>
