---
id: "viewprops"
title: "ViewProps"
sidebar_label: "ViewProps"
---

## Hierarchy

* **ViewProps**

  ↳ [TextProps](textprops.md)

  ↳ [ButtonProps](buttonprops.md)

  ↳ [LineEditProps](lineeditprops.md)

## Index

### Properties

* [enabled](viewprops.md#optional-enabled)
* [id](viewprops.md#optional-id)
* [mouseTracking](viewprops.md#optional-mousetracking)
* [style](viewprops.md#optional-style)
* [styleSheet](viewprops.md#optional-stylesheet)
* [visible](viewprops.md#optional-visible)
* [windowOpacity](viewprops.md#optional-windowopacity)
* [windowTitle](viewprops.md#optional-windowtitle)

## Properties

### `Optional` enabled

• **enabled**? : *undefined | false | true*

Sets the property that tells whether the widget is enabled. In general an enabled widget handles keyboard and mouse events; a disabled widget does not. [QWidget: setEnabled](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetenabledenabled)

___

### `Optional` id

• **id**? : *undefined | string*

Sets the object name (id) of the widget in Qt. Object name can be analogous to id of an element in the web world. Using the objectName of the widget one can reference it in the Qt's stylesheet much like what we do with id in the web world. [QWidget: setObjectName](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetobjectnameobjectname)

___

### `Optional` mouseTracking

• **mouseTracking**? : *undefined | false | true*

Sets the property that tells whether mouseTracking is enabled for the widget. [QWidget: setMouseTracking](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetmousetrackingismousetracked)

___

### `Optional` style

• **style**? : *undefined | string*

Sets the inline stylesheet property. [QWidget: setInlineStyle](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetinlinestylestyle)

___

### `Optional` styleSheet

• **styleSheet**? : *undefined | string*

Sets the property that holds the widget's style sheet. [QWidget: setStyleSheet](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetstylesheetstylesheet)

___

### `Optional` visible

• **visible**? : *undefined | false | true*

Shows or hides the widget and its children. [QWidget: show](https://docs.nodegui.org/docs/api/NodeWidget#widgetshow)

___

### `Optional` windowOpacity

• **windowOpacity**? : *undefined | number*

This property holds the level of opacity for the window. [QWidget: setWindowOpacity](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetwindowopacityopacity)

___

### `Optional` windowTitle

• **windowTitle**? : *undefined | string*

Sets the window title property. [QWidget: setWindowTitle](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetwindowtitletitle)
