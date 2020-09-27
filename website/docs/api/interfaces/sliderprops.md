---
id: "sliderprops"
title: "SliderProps"
sidebar_label: "SliderProps"
---

The slider widget allows users to render native sliders into their apps.
It is based on the [NodeGui's QSlider](https://docs.nodegui.org/docs/api/generated/classes/qslider)

## Usage

```html
<template>
 <vn-view>
   <vn-slider v-model="sliderValue" :maximum="100" :minimum="10" :orientation="1" />
   <vn-text>The slider value is: {{sliderValue}}</vn-text>
 </vn-view>
</template>

<script>
 import { ref } from 'vue';

 export default {
  setup() {
    const sliderValue = ref(0);

    return {
      sliderValue
    }
  }
 };
</script>
```

## What it looks like?

![vn-slider-demo](/img/vn-slider.gif)

## Props and styling

You can find all the props `vn-slider` accepts listed below.
Apart from this, you can take a look at the [styling](/docs/guides/3-styling)
and [event handling](/docs/guides/5-handle-events) docs

## Hierarchy

* [ViewProps](viewprops.md)

  ↳ **SliderProps**

## Index

### Properties

* [enabled](sliderprops.md#optional-enabled)
* [hasTracking](sliderprops.md#optional-hastracking)
* [id](sliderprops.md#optional-id)
* [invertedAppearance](sliderprops.md#optional-invertedappearance)
* [invertedControls](sliderprops.md#optional-invertedcontrols)
* [isSliderDown](sliderprops.md#optional-issliderdown)
* [maximum](sliderprops.md#optional-maximum)
* [minimum](sliderprops.md#optional-minimum)
* [mouseTracking](sliderprops.md#optional-mousetracking)
* [orientation](sliderprops.md#optional-orientation)
* [pageStep](sliderprops.md#optional-pagestep)
* [singleStep](sliderprops.md#optional-singlestep)
* [sliderPosition](sliderprops.md#optional-sliderposition)
* [style](sliderprops.md#optional-style)
* [styleSheet](sliderprops.md#optional-stylesheet)
* [tickInterval](sliderprops.md#optional-tickinterval)
* [tickPosition](sliderprops.md#optional-tickposition)
* [value](sliderprops.md#optional-value)
* [visible](sliderprops.md#optional-visible)
* [windowOpacity](sliderprops.md#optional-windowopacity)
* [windowTitle](sliderprops.md#optional-windowtitle)

## Properties

### `Optional` enabled

• **enabled**? : *undefined | false | true*

*Inherited from [ViewProps](viewprops.md).[enabled](viewprops.md#optional-enabled)*

Sets the property that tells whether the widget is enabled. In general an enabled widget handles keyboard and mouse events; a disabled widget does not. [QWidget: setEnabled](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetenabledenabled)

___

### `Optional` hasTracking

• **hasTracking**? : *undefined | false | true*

___

### `Optional` id

• **id**? : *undefined | string*

*Inherited from [ViewProps](viewprops.md).[id](viewprops.md#optional-id)*

Sets the object name (id) of the widget in Qt. Object name can be analogous to id of an element in the web world. Using the objectName of the widget one can reference it in the Qt's stylesheet much like what we do with id in the web world. [QWidget: setObjectName](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetobjectnameobjectname)

___

### `Optional` invertedAppearance

• **invertedAppearance**? : *undefined | false | true*

___

### `Optional` invertedControls

• **invertedControls**? : *undefined | false | true*

___

### `Optional` isSliderDown

• **isSliderDown**? : *undefined | false | true*

___

### `Optional` maximum

• **maximum**? : *undefined | number*

___

### `Optional` minimum

• **minimum**? : *undefined | number*

___

### `Optional` mouseTracking

• **mouseTracking**? : *undefined | false | true*

*Inherited from [ViewProps](viewprops.md).[mouseTracking](viewprops.md#optional-mousetracking)*

Sets the property that tells whether mouseTracking is enabled for the widget. [QWidget: setMouseTracking](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetmousetrackingismousetracked)

___

### `Optional` orientation

• **orientation**? : *Orientation*

___

### `Optional` pageStep

• **pageStep**? : *undefined | number*

___

### `Optional` singleStep

• **singleStep**? : *undefined | number*

___

### `Optional` sliderPosition

• **sliderPosition**? : *undefined | number*

___

### `Optional` style

• **style**? : *undefined | string*

*Inherited from [ViewProps](viewprops.md).[style](viewprops.md#optional-style)*

Sets the inline stylesheet property. [QWidget: setInlineStyle](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetinlinestylestyle)

___

### `Optional` styleSheet

• **styleSheet**? : *undefined | string*

*Inherited from [ViewProps](viewprops.md).[styleSheet](viewprops.md#optional-stylesheet)*

Sets the property that holds the widget's style sheet. [QWidget: setStyleSheet](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetstylesheetstylesheet)

___

### `Optional` tickInterval

• **tickInterval**? : *undefined | number*

___

### `Optional` tickPosition

• **tickPosition**? : *TickPosition*

___

### `Optional` value

• **value**? : *undefined | number*

___

### `Optional` visible

• **visible**? : *undefined | false | true*

*Inherited from [ViewProps](viewprops.md).[visible](viewprops.md#optional-visible)*

Shows or hides the widget and its children. [QWidget: show](https://docs.nodegui.org/docs/api/NodeWidget#widgetshow)

___

### `Optional` windowOpacity

• **windowOpacity**? : *undefined | number*

*Inherited from [ViewProps](viewprops.md).[windowOpacity](viewprops.md#optional-windowopacity)*

This property holds the level of opacity for the window. [QWidget: setWindowOpacity](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetwindowopacityopacity)

___

### `Optional` windowTitle

• **windowTitle**? : *undefined | string*

*Inherited from [ViewProps](viewprops.md).[windowTitle](viewprops.md#optional-windowtitle)*

Sets the window title property. [QWidget: setWindowTitle](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetwindowtitletitle)
