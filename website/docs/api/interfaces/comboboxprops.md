---
id: "comboboxprops"
title: "ComboBoxProps"
sidebar_label: "ComboBoxProps"
---

The ComboBox component provides the ability to add and manipulate native combobox widgets.
It is based on [NodeGui's QComboBox](https://docs.nodegui.org/docs/api/generated/classes/qcombobox/).

## Usage

```html
<template>
  <vn-view>
    <vn-text>Choose a color</vn-text>
    <vn-combobox :items="data" v-model="index" />
    <vn-text>You have picked: {{data[index].text}}</vn-text>
  </vn-view>
</template>

<script>
  import { ref } from 'vue';

  export default {
    setup() {
      const index = ref(0);
      const data = [
        {text: "Red"},
        {text: "Yellow"},
        {text: "Blue"},
        {text: "Green"},
      ];

      return {
        index,
        data,
      }
    }
  };
</script>

```

## What it looks like?

![combobox-demo](/img/vn-combobox.gif)

## Props and styling

You can find all the props `vn-combobox` accepts listed below.
Apart from this, you can take a look at the [styling](/docs/guides/3-styling)
and [event handling](/docs/guides/5-handle-events) docs

## Hierarchy

* [ViewProps](viewprops.md)

  ↳ **ComboBoxProps**

## Index

### Properties

* [count](comboboxprops.md#optional-count)
* [currentData](comboboxprops.md#optional-currentdata)
* [currentIndex](comboboxprops.md#optional-currentindex)
* [currentText](comboboxprops.md#optional-currenttext)
* [duplicatesEnabled](comboboxprops.md#optional-duplicatesenabled)
* [editable](comboboxprops.md#optional-editable)
* [enabled](comboboxprops.md#optional-enabled)
* [frame](comboboxprops.md#optional-frame)
* [iconSize](comboboxprops.md#optional-iconsize)
* [id](comboboxprops.md#optional-id)
* [insertPolicy](comboboxprops.md#optional-insertpolicy)
* [items](comboboxprops.md#optional-items)
* [maxCount](comboboxprops.md#optional-maxcount)
* [maxVisibleItems](comboboxprops.md#optional-maxvisibleitems)
* [minimumContentsLength](comboboxprops.md#optional-minimumcontentslength)
* [modelColumn](comboboxprops.md#optional-modelcolumn)
* [mouseTracking](comboboxprops.md#optional-mousetracking)
* [sizeAdjustPolicy](comboboxprops.md#optional-sizeadjustpolicy)
* [style](comboboxprops.md#optional-style)
* [styleSheet](comboboxprops.md#optional-stylesheet)
* [visible](comboboxprops.md#optional-visible)
* [windowOpacity](comboboxprops.md#optional-windowopacity)
* [windowTitle](comboboxprops.md#optional-windowtitle)

## Properties

### `Optional` count

• **count**? : *undefined | number*

___

### `Optional` currentData

• **currentData**? : *QVariant*

___

### `Optional` currentIndex

• **currentIndex**? : *undefined | number*

___

### `Optional` currentText

• **currentText**? : *undefined | string*

___

### `Optional` duplicatesEnabled

• **duplicatesEnabled**? : *undefined | false | true*

___

### `Optional` editable

• **editable**? : *undefined | false | true*

___

### `Optional` enabled

• **enabled**? : *undefined | false | true*

*Inherited from [ViewProps](viewprops.md).[enabled](viewprops.md#optional-enabled)*

Sets the property that tells whether the widget is enabled. In general an enabled widget handles keyboard and mouse events; a disabled widget does not. [QWidget: setEnabled](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetenabledenabled)

___

### `Optional` frame

• **frame**? : *undefined | false | true*

___

### `Optional` iconSize

• **iconSize**? : *QSize*

___

### `Optional` id

• **id**? : *undefined | string*

*Inherited from [ViewProps](viewprops.md).[id](viewprops.md#optional-id)*

Sets the object name (id) of the widget in Qt. Object name can be analogous to id of an element in the web world. Using the objectName of the widget one can reference it in the Qt's stylesheet much like what we do with id in the web world. [QWidget: setObjectName](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetobjectnameobjectname)

___

### `Optional` insertPolicy

• **insertPolicy**? : *InsertPolicy*

___

### `Optional` items

• **items**? : *[ComboBoxItem](../globals.md#comboboxitem)[]*

___

### `Optional` maxCount

• **maxCount**? : *undefined | number*

___

### `Optional` maxVisibleItems

• **maxVisibleItems**? : *undefined | number*

___

### `Optional` minimumContentsLength

• **minimumContentsLength**? : *undefined | number*

___

### `Optional` modelColumn

• **modelColumn**? : *undefined | number*

___

### `Optional` mouseTracking

• **mouseTracking**? : *undefined | false | true*

*Inherited from [ViewProps](viewprops.md).[mouseTracking](viewprops.md#optional-mousetracking)*

Sets the property that tells whether mouseTracking is enabled for the widget. [QWidget: setMouseTracking](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetmousetrackingismousetracked)

___

### `Optional` sizeAdjustPolicy

• **sizeAdjustPolicy**? : *SizeAdjustPolicy*

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
