<template>
  <vn-scroll-area>
    <HelloWorld>
      <template v-slot:header>
        <vn-text>Here might be a page title</vn-text>
      </template>
      <vn-text>Default slot hello content</vn-text>
      <vn-slider :minimum="10" :maximum="100" v-model="sliderValue" :orientation="1" />
      <vn-text>{{sliderValue}}</vn-text>
    </HelloWorld>
  </vn-scroll-area>
</template>

<script>
import { ref } from 'vue';
import HelloWorld from "./Header";

export default {
  components: {
    HelloWorld: HelloWorld,
  },
  setup() {
    const sliderValue = ref(0);

    return {
      sliderValue
    }
  }
};
</script>
