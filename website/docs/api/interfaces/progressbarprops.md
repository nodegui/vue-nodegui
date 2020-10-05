---
id: "progressbarprops"
title: "ProgressBarProps"
sidebar_label: "ProgressBarProps"
---

The ProgressBar component provides ability to add and manipulate native progress bar widgets.
It is based on [NodeGui's QProgressBar](https://docs.nodegui.org/docs/api/generated/classes/qprogressbar/).

## Usage

```html
<template>
 <vn-view>
   <vn-progress-bar :value="progressBarValue" />
   <vn-button v-on:clicked="inc" >Increase the above bar's progress</vn-button>
 </vn-view>
</template>

<script>
import { ref } from 'vue';

export default {
  setup () {
    const progressBarValue = ref(0)
    const inc = () => {
      progressBarValue.value += 25;
    }
    return {
      progressBarValue,
      inc,
    }
  }
}
</script>
```

## What it looks like?

![progress-bar-demo](/img/vn-progress-bar.gif)

## Props and styling

You can find all the props `vn-progress-bar` accepts listed below.
Apart from this, you can take a look at the [styling](/docs/guides/3-styling)
and [event handling](/docs/guides/5-handle-events) docs

## Hierarchy

* [ViewProps](viewprops.md)

  ↳ **ProgressBarProps**

## Index

### Properties

* [enabled](progressbarprops.md#optional-enabled)
* [id](progressbarprops.md#optional-id)
* [maximum](progressbarprops.md#optional-maximum)
* [minimum](progressbarprops.md#optional-minimum)
* [mouseTracking](progressbarprops.md#optional-mousetracking)
* [orientation](progressbarprops.md#optional-orientation)
* [style](progressbarprops.md#optional-style)
* [styleSheet](progressbarprops.md#optional-stylesheet)
* [value](progressbarprops.md#optional-value)
* [visible](progressbarprops.md#optional-visible)
* [windowOpacity](progressbarprops.md#optional-windowopacity)
* [windowTitle](progressbarprops.md#optional-windowtitle)

## Properties

### `Optional` enabled

• **enabled**? : *undefined | false | true*

*Inherited from [ViewProps](viewprops.md).[enabled](viewprops.md#optional-enabled)*

Sets the property that tells whether the widget is enabled. In general an enabled widget handles keyboard and mouse events; a disabled widget does not. [QWidget: setEnabled](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetenabledenabled)

___

### `Optional` id

• **id**? : *undefined | string*

*Inherited from [ViewProps](viewprops.md).[id](viewprops.md#optional-id)*

Sets the object name (id) of the widget in Qt. Object name can be analogous to id of an element in the web world. Using the objectName of the widget one can reference it in the Qt's stylesheet much like what we do with id in the web world. [QWidget: setObjectName](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetobjectnameobjectname)

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
