---
id: "scrollareaprops"
title: "ScrollAreaProps"
sidebar_label: "ScrollAreaProps"
---

The scroll-area widget allows users to wrap other widgets to enable a scroll
(horizontal and vertical).
It is based on [NodeGui's QScrollArea](https://docs.nodegui.org/docs/api/generated/classes/qscrollarea)

> Note that the scroll area only allows one child. So, you may have to wrap contents in a vn-view

## Usage

```html
<template>
 <vn-scroll-area>
   <vn-view :style="'flex-direction: \'column\''">
     <vn-text>Hello world</vn-text>
     <vn-text :wordWrap="true">
       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Donec sapien orci, mattis sed lectus in, congue commodo odio.
       Pellentesque luctus vestibulum justo eu porta.
       Vivamus porttitor leo vitae tellus fringilla viverra.
       Ut quis nunc id nisi vehicula posuere.
       Suspendisse sem sem, fringilla ac lacinia et, rutrum et ipsum.
       Curabitur porttitor justo sapien, et scelerisque erat sollicitudin a.
       In id quam lectus. Vestibulum sed nunc tempus leo dapibus scelerisque vel ut ligula.
       Aliquam tempor iaculis arcu non interdum.
     </vn-text>
   </vn-view>
 </vn-scroll-area>
</template>

<script>
 export default { };
</script>
```

## What it looks like?

![scroll-area-demo](/img/vn-scroll-area.gif)

## Props and styling

You can find all the props `vn-scroll-area` accepts listed below.
Apart from this, you can take a look at the [styling](/docs/guides/3-styling)
and [event handling](/docs/guides/5-handle-events) docs

## Hierarchy

* [ViewProps](viewprops.md)

  ↳ **ScrollAreaProps**

## Index

### Properties

* [enabled](scrollareaprops.md#optional-enabled)
* [id](scrollareaprops.md#optional-id)
* [mouseTracking](scrollareaprops.md#optional-mousetracking)
* [style](scrollareaprops.md#optional-style)
* [styleSheet](scrollareaprops.md#optional-stylesheet)
* [visible](scrollareaprops.md#optional-visible)
* [widgetResizable](scrollareaprops.md#optional-widgetresizable)
* [windowOpacity](scrollareaprops.md#optional-windowopacity)
* [windowTitle](scrollareaprops.md#optional-windowtitle)

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

### `Optional` widgetResizable

• **widgetResizable**? : *undefined | false | true*

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
