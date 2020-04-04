<template>
  <HelloWorld />
</template>

<script>
import { ref } from 'vue'
import HelloWorld from './Header';

export default {
  components: {
    HelloWorld: HelloWorld
  },
  setup() {
    const count = ref(0)
    const inc = () => {
      count.value++
    }

    return {
      count,
      inc
    }
  }
}
</script>
