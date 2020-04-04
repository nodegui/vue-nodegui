<template>
  <button @pressed="inc">click me</button>
</template>

<script>
import {ref} from 'vue';

export default {
  setup() {
    const count = ref(0);
    
    const inc = () => {
      count.value++;
      console.log(count.value);
    }

    return {inc};
  }
}
</script>

<style>

</style>