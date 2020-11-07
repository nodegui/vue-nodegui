<template>
  <vn-view :style="'flex-direction: \'column\''">
    <slot name="header">
      <vn-text>This is the default header slot</vn-text>
    </slot>
    <vn-text>{{line1Text}}</vn-text>
    <vn-image src="https://via.placeholder.com/150" />
    <vn-line-edit v-model="line1Text" placeholderText="legend says you can type here" />
    <vn-text>Second line of text {{count}}</vn-text>
    <vn-button v-on:clicked="inc" :flat="true">increment</vn-button>
    <vn-button v-on:pressed="toggleView">{{viewVisible?"Hide": "Show"}} extra text</vn-button>
    <vn-view v-if="viewVisible">
      <vn-text>This view is invisible</vn-text>
    </vn-view>
    <vn-text :openExternalLinks="true">link to the {{link}}</vn-text>
    <slot>
      <vn-text>default slot text</vn-text>
    </slot>
    <vn-checkbox>checkbox label</vn-checkbox>
    <vn-radio-button>radio-button label</vn-radio-button>
    <vn-spinbox />
    <vn-text>Here's a progres bar</vn-text>
    <vn-progress-bar :value="45" />
    <vn-combobox :items="data" />
    <vn-dial :notchesVisible="true" v-model="dialValue" />
    <vn-text>{{dialValue}}</vn-text>
  </vn-view>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);
    const viewVisible = ref(true);
    const dialValue = ref(0);
    const data = [
      {text: "item 1"}, 
      {text: "item 2"}, 
      {text: "item 3"}, 
    ];
    const line1Text = ref('Type whatever you want in the text box below');
    const inc = () => {
      count.value++;
    }

    const toggleView = () => {
      viewVisible.value = !viewVisible.value;
    }

    const link = `<a 
              style="color: white" 
              href="https://github.com/nodegui/vue-nodegui">
            docs
          </a>`;

    return {
      count,
      inc,
      viewVisible,
      toggleView,
      line1Text,
      link,
      data,
      dialValue,
    };
  }
}
</script>