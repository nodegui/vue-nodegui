<template>
  <div>
    <p>First line of text</p>
    <p>Second line of text {{count}}</p>
    <button @click="inc">increment</button>
    <div :visible="false">
      This view is invisible
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
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

<style>

</style>