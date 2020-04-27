<template>
  <div>
    <p>First line of text</p>
    <p>Second line of text {{count}}</p>
    <button v-on:clicked="inc" :flat="true">increment</button>
    <button v-on:pressed="toggleView">{{viewVisible?"Hide": "Show"}} extra text</button>
    <div :visible="viewVisible">
      <p>This view is invisible</p>
    </div>
    <input placeholderText="legend says you can type here" />
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);
    const viewVisible = ref(false);
    const inc = () => {
      count.value++;
    }

    const toggleView = () => {
      viewVisible.value = !viewVisible.value;
      console.log(viewVisible);
    }

    return {
      count,
      inc,
      viewVisible,
      toggleView
    };
  }
}
</script>

<style>

</style>