<template>
  <vn-view>
    <row>
      <vn-text :style="resultStyle">6970</vn-text>
    </row>
    <row>
      <action-button theme="dark" text="AC" action="clear" @actionPressed="handleActionPress" />
      <action-button theme="dark" text="±" action="negate" @actionPressed="handleActionPress" />
      <action-button theme="dark" text="%" action="percent" @actionPressed="handleActionPress" />
      <action-button text="÷" action="divide" @actionPressed="handleActionPress" />
    </row>
    <row>
      <numeric-button number="7" @numberPressed="handleNumberPress" />
      <numeric-button number="8" @numberPressed="handleNumberPress" />
      <numeric-button number="9" @numberPressed="handleNumberPress" />
      <action-button text="*" action="multiply" @actionPressed="handleActionPress" />
    </row>
    <row>
      <numeric-button number="4" @numberPressed="handleNumberPress" />
      <numeric-button number="5" @numberPressed="handleNumberPress" />
      <numeric-button number="6" @numberPressed="handleNumberPress" />
      <action-button text="-" action="subtract" @actionPressed="handleActionPress" />
    </row>
    <row>
      <numeric-button number="1" @numberPressed="handleNumberPress" />
      <numeric-button number="2" @numberPressed="handleNumberPress" />
      <numeric-button number="3" @numberPressed="handleNumberPress" />
      <action-button text="+" action="add" @actionPressed="handleActionPress" />
    </row>
    <row>
      <numeric-button number="" />
      <numeric-button number="0" @numberPressed="handleNumberPress" />
      <numeric-button number="." @numberPressed="handleNumberPress" />
      <action-button text="=" action="equals" @actionPressed="handleActionPress" />
    </row>
  </vn-view>
</template>

<script>
import Row from './components/Row'
import NumericButton from './components/NumericButton';
import ActionButton from './components/ActionButton';

export default {
  components: {
    Row,
    NumericButton,
    ActionButton
  },
  setup() {
    return {
      handleNumberPress(val) {
        console.log(val)
      },
      handleActionPress(val, action) {
        console.log(val, action)
      },
      resultStyle: `
        background-color: rgb(44, 60, 68);
        font-size: 36px;
        width: '100%';
        padding-top: 5px;
        padding-bottom: 5px;
        qproperty-alignment: AlignRight
      `
    }
  }
}
</script>
