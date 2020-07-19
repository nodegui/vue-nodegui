---
id: "lineeditprops"
title: "LineEditProps"
sidebar_label: "LineEditProps"
---

## Hierarchy

* [ViewProps](viewprops.md)

  ↳ **LineEditProps**

## Index

### Properties

* [echoMode](lineeditprops.md#optional-echomode)
* [enabled](lineeditprops.md#optional-enabled)
* [id](lineeditprops.md#optional-id)
* [mouseTracking](lineeditprops.md#optional-mousetracking)
* [placeholderText](lineeditprops.md#optional-placeholdertext)
* [readOnly](lineeditprops.md#optional-readonly)
* [style](lineeditprops.md#optional-style)
* [styleSheet](lineeditprops.md#optional-stylesheet)
* [text](lineeditprops.md#optional-text)
* [visible](lineeditprops.md#optional-visible)
* [windowOpacity](lineeditprops.md#optional-windowopacity)
* [windowTitle](lineeditprops.md#optional-windowtitle)

## Properties

### `Optional` echoMode

• **echoMode**? : *EchoMode*

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

### `Optional` placeholderText

• **placeholderText**? : *undefined | string*

___

### `Optional` readOnly

• **readOnly**? : *undefined | false | true*

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
