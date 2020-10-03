---
id: "spinboxprops"
title: "SpinBoxProps"
sidebar_label: "SpinBoxProps"
---

The SpinBox component provides the ability to add and manipulate native spin box widgets.
It is based on [NodeGui's QSpinBox](https://docs.nodegui.org/docs/api/generated/classes/qspinbox/).

## Usage

```html
<template>
 <vn-view>
   <vn-text>How many slices of cake ($2) would you like?</vn-text>
   <vn-spinbox v-model="spinBoxValue"/>
   <vn-text>Total cost: ${{spinBoxValue * 2}}</vn-text>
 </vn-view>
</template>

<script>
import { ref } from 'vue';

export default {
 setup() {
   const spinBoxValue = ref(0)
   return { spinBoxValue }
 }
}
</script>
```

## What it looks like?

![spinbox-demo](/img/vn-spinbox.gif)

## Props and styling

You can find all the props `vn-spinbox` accepts listed below.
Apart from this, you can take a look at the [styling](/docs/guides/3-styling)
and [event handling](/docs/guides/5-handle-events) docs

## Hierarchy

* [ViewProps](viewprops.md)

  ↳ **SpinBoxProps**

## Index

### Properties

* [enabled](spinboxprops.md#optional-enabled)
* [id](spinboxprops.md#optional-id)
* [mouseTracking](spinboxprops.md#optional-mousetracking)
* [prefix](spinboxprops.md#optional-prefix)
* [range](spinboxprops.md#optional-range)
* [singleStep](spinboxprops.md#optional-singlestep)
* [style](spinboxprops.md#optional-style)
* [styleSheet](spinboxprops.md#optional-stylesheet)
* [suffix](spinboxprops.md#optional-suffix)
* [value](spinboxprops.md#optional-value)
* [visible](spinboxprops.md#optional-visible)
* [windowOpacity](spinboxprops.md#optional-windowopacity)
* [windowTitle](spinboxprops.md#optional-windowtitle)

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

### `Optional` mouseTracking

• **mouseTracking**? : *undefined | false | true*

*Inherited from [ViewProps](viewprops.md).[mouseTracking](viewprops.md#optional-mousetracking)*

Sets the property that tells whether mouseTracking is enabled for the widget. [QWidget: setMouseTracking](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetmousetrackingismousetracked)

___

### `Optional` prefix

• **prefix**? : *undefined | string*

___

### `Optional` range

• **range**? : *[Range](../globals.md#range)*

___

### `Optional` singleStep

• **singleStep**? : *undefined | number*

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

### `Optional` suffix

• **suffix**? : *undefined | string*

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
