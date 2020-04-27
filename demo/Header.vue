<template>
  <div>
    <p>{{line1Text}}</p>
    <input @textChanged="textChanged" placeholderText="legend says you can type here" />
    <p>Second line of text {{count}}</p>
    <button v-on:clicked="inc" :flat="true">increment</button>
    <button v-on:pressed="toggleView">{{viewVisible?"Hide": "Show"}} extra text</button>
    <div :visible="viewVisible">
      <p>This view is invisible</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);
    const viewVisible = ref(false);
    const line1Text = ref('Type whatever you want in the text box below');
    const inc = () => {
      count.value++;
    }

    const toggleView = () => {
      viewVisible.value = !viewVisible.value;
      console.log(viewVisible);
    }

    const textChanged = (e) => {
      line1Text.value = e;
    }

    return {
      count,
      inc,
      viewVisible,
      toggleView,
      textChanged,
      line1Text
    };
  }
}
</script>

<style>

</style>