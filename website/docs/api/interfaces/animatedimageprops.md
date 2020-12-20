---
id: "animatedimageprops"
title: "AnimatedImageProps"
sidebar_label: "AnimatedImageProps"
---

The animated image widget allows users to create and render native GIFs, video (without controls)
elements in the app.
It is based on [NodeGui's QLabel](https://docs.nodegui.org/docs/api/generated/classes/qlabel) along with [NodeGui's QMovie](https://docs.nodegui.org/docs/api/generated/classes/qmovie)

## Usage

```html
<template>
 <vn-view>
  <vn-animated-image :src="'https://i.giphy.com/media/oYtVHSxngR3lC/giphy.gif'" />
 </vn-view>
</template>

<script>
 export default { }
</script>
```

## What it looks like?

![animated-image-demo](/img/vn-animated-image.gif)

## Props and styling

You can find all the props `vn-animated-image` accepts listed below.
Apart from this, you can take a look at the [styling](/docs/guides/3-styling)
and [event handling](/docs/guides/5-handle-events) docs

## Hierarchy

  ↳ [TextProps](textprops.md)

  ↳ **AnimatedImageProps**

## Index

### Properties

* [buffer](animatedimageprops.md#optional-buffer)
* [enabled](animatedimageprops.md#optional-enabled)
* [id](animatedimageprops.md#optional-id)
* [mouseTracking](animatedimageprops.md#optional-mousetracking)
* [openExternalLinks](animatedimageprops.md#optional-openexternallinks)
* [scaledContents](animatedimageprops.md#optional-scaledcontents)
* [src](animatedimageprops.md#optional-src)
* [style](animatedimageprops.md#optional-style)
* [styleSheet](animatedimageprops.md#optional-stylesheet)
* [visible](animatedimageprops.md#optional-visible)
* [windowOpacity](animatedimageprops.md#optional-windowopacity)
* [windowTitle](animatedimageprops.md#optional-windowtitle)
* [wordWrap](animatedimageprops.md#optional-wordwrap)

## Properties

### `Optional` buffer

• **buffer**? : *Buffer*

___

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

### `Optional` openExternalLinks

• **openExternalLinks**? : *undefined | false | true*

*Inherited from [TextProps](textprops.md).[openExternalLinks](textprops.md#optional-openexternallinks)*

___

### `Optional` scaledContents

• **scaledContents**? : *undefined | false | true*

*Inherited from [TextProps](textprops.md).[scaledContents](textprops.md#optional-scaledcontents)*

___

### `Optional` src

• **src**? : *undefined | string*

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

### `Optional` wordWrap

• **wordWrap**? : *undefined | false | true*

*Inherited from [TextProps](textprops.md).[wordWrap](textprops.md#optional-wordwrap)*
