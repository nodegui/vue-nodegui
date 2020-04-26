<template>
  <div>
    <p>First line of text</p>
    <p>Second line of text {{count}}</p>
    <button v-on:clicked="inc" :flat="true">increment</button>
    <div :visible="true">
      <p>This view is invisible</p>
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