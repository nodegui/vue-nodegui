<template>
  <div>
    <slot name="header">
      <p>This is the default header slot</p>
    </slot>
    <p>{{line1Text}}</p>
    <img src="https://via.placeholder.com/150" />
    <input @textChanged="textChanged" placeholderText="legend says you can type here" />
    <p>Second line of text {{count}}</p>
    <button v-on:clicked="inc" :flat="true">increment</button>
    <button v-on:pressed="toggleView">{{viewVisible?"Hide": "Show"}} extra text</button>
    <div :visible="viewVisible">
      <p>This view is invisible</p>
    </div>
    <p :openExternalLinks="true">link to the {{link}}</p>
    <slot>
      <p>default slot text</p>
    </slot>
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
    }

    const textChanged = (e) => {
      line1Text.value = e;
    }

    const link = `<a 
              style="color: white" 
              href="https://github.com/shubhamzanwar/vue-nodegui">
            docs
          </a>`;

    return {
      count,
      inc,
      viewVisible,
      toggleView,
      textChanged,
      line1Text,
      link
    };
  }
}
</script>

<style>

</style>