---
id: "dialprops"
title: "DialProps"
sidebar_label: "DialProps"
---

The Dial provides ability to add and manipulate native dial slider widgets. It is based on
[NodeGui's QDial](https://docs.nodegui.org/docs/api/generated/classes/qdial/).

## Usage

```html
<template>
  <vn-view :style="'flex-direction: \'column\''">
   <vn-dial :notchesVisible="true" v-model="dialValue" />
   <vn-text>{{dialValue}}</vn-text>
  </vn-view>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
   const dialValue = ref(0);
   return {
     dialValue
   };
  }
}
</script>
```

## What it looks like?

![dial-demo](/img/vn-dial.gif)

## Props and styling

You can find all the props `vn-dial` accepts listed below.
Apart from this, you can take a look at the [styling](/docs/guides/3-styling)
and [event handling](/docs/guides/5-handle-events) docs

## Hierarchy

* [ViewProps](viewprops.md)

  ↳ **DialProps**

## Index

### Properties

* [enabled](dialprops.md#optional-enabled)
* [id](dialprops.md#optional-id)
* [mouseTracking](dialprops.md#optional-mousetracking)
* [notchTarget](dialprops.md#optional-notchtarget)
* [notchesVisible](dialprops.md#optional-notchesvisible)
* [style](dialprops.md#optional-style)
* [styleSheet](dialprops.md#optional-stylesheet)
* [visible](dialprops.md#optional-visible)
* [windowOpacity](dialprops.md#optional-windowopacity)
* [windowTitle](dialprops.md#optional-windowtitle)
* [wrapping](dialprops.md#optional-wrapping)

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

### `Optional` notchTarget

• **notchTarget**? : *undefined | number*

___

### `Optional` notchesVisible

• **notchesVisible**? : *undefined | false | true*

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

___

### `Optional` wrapping

• **wrapping**? : *undefined | false | true*
