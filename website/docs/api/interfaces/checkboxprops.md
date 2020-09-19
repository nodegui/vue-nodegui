---
id: "checkboxprops"
title: "CheckboxProps"
sidebar_label: "CheckboxProps"
---

The checkbox widget allows users to create and render native checkboxes in the app.
This widget is based on [NodeGui's QCheckBox](https://docs.nodegui.org/docs/api/generated/classes/qcheckbox)

## Usage

```html
<template>
 <vn-checkbox @clicked="checkboxClicked">Check box label</vn-checkbox>
</template>

<script>
 export default {
   setup() {
     return {
       checkboxClicked: (isChecked) => {
         console.log("The checkbox is ", isChecked ? "checked" : "not checked")
       }
     }
   }
 }
</script>
```

## What it looks like?

![checkbox-demo](/img/vn-checkbox.png)

## Props and styling

You can find all the props `vn-checkbox` accepts listed below.
Apart from this, you can take a look at the [styling](/docs/guides/3-styling)
and [event handling](/docs/guides/5-handle-events) docs

## Hierarchy

* AbstractButtonProps

  ↳ **CheckboxProps**

## Index

### Properties

* [checked](checkboxprops.md#optional-checked)
* [enabled](checkboxprops.md#optional-enabled)
* [icon](checkboxprops.md#optional-icon)
* [iconSize](checkboxprops.md#optional-iconsize)
* [id](checkboxprops.md#optional-id)
* [mouseTracking](checkboxprops.md#optional-mousetracking)
* [style](checkboxprops.md#optional-style)
* [styleSheet](checkboxprops.md#optional-stylesheet)
* [text](checkboxprops.md#optional-text)
* [visible](checkboxprops.md#optional-visible)
* [windowOpacity](checkboxprops.md#optional-windowopacity)
* [windowTitle](checkboxprops.md#optional-windowtitle)

## Properties

### `Optional` checked

• **checked**? : *undefined | false | true*

Sets whether the Checkbox border is raised. [QPushCheckbox: setFlat](https://docs.nodegui.org/docs/api/QPushCheckbox#Checkboxsetflatisflat)

___

### `Optional` enabled

• **enabled**? : *undefined | false | true*

*Inherited from [ViewProps](viewprops.md).[enabled](viewprops.md#optional-enabled)*

Sets the property that tells whether the widget is enabled. In general an enabled widget handles keyboard and mouse events; a disabled widget does not. [QWidget: setEnabled](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetenabledenabled)

___

### `Optional` icon

• **icon**? : *QIcon*

*Inherited from void*

Sets an icon in the button. [QPushButton: setIcon](https://docs.nodegui.org/docs/api/QPushButton#buttonseticonicon)

___

### `Optional` iconSize

• **iconSize**? : *QSize*

*Inherited from void*

Sets an icon size in the button. [QPushButton: setIconSize](https://docs.nodegui.org/docs/api/QPushButton#buttonseticonsize)

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

### `Optional` text

• **text**? : *undefined | string*

*Inherited from void*

Sets the given text to the button (Used as an alternative to children). [QPushButton: setText](https://docs.nodegui.org/docs/api/QPushButton#buttonsettexttext)

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
