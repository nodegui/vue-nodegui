---
id: 5-handle-events
sidebar_label: Handle Events
title: Events in Vue Nodegui
---

Vue NodeGui allows you to listen to various events that might originate from the underlying Qt widgets. These events can either be a simple button click or a text change on a lineedit.

In order to do this we need to attach an event listener to the respective widget.

Technically, the event listener is a NodeJs [EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter) instance that listens to events from the underlying Qt widget. The native Qt widget would send all the events to the event emitter in Vue NodeGui world and the user can essentially subscribe to it.

Lets see an example to see how this looks in practice.

## Event handling

The following example demonstrates how to add a clicked event listener to a button widget.

![button press](/img/button-press.gif)

The code for implementing the same if as shown below

```html
<!-- App.vue -->

<template>
  <vn-button @clicked="buttonClicked" @pressed="buttonPressed">Click me</vn-button>
</template>

<script>
export default {
    setup() {
        return {
            buttonClicked: () => {
                console.log("button was clicked");
            },
            buttonPressed: () => {
                console.log("button was pressed");
            }
        }
    }
}
</script>
```

As you can see, we are using both the `clicked` and the `pressed` event handlers with the button. These are both supported by Qt and the difference between them is only when they are called.

- The `pressed` event is triggered as soon as the button is pressed. It does not wait for the user to release the mouse button and complete the click.
- The `clicked` event is triggered when the user releases the button after pressing on it.

You can alternatively choose between the two based on your use-case.

---

Internally, Qt widgets in nodegui has two types of events.:

- Signals: In short these are basically different for different widgets. So a button maybe have `clicked`, `pressed` signal, while a linedit may have `textChanged` signal.
- QEvents: These are common set of events for all the widgets/qobjects in NodeGui world. These are also helpful at times but typically you would end up using signals more than these common events.

In Vue NodeGui you can listen to both Signals and QEvents using the same `@<whichever-event-you-want>` or `v-on:<whichever-event-you-want>` prop.

### How do I know which events are supported?

In order to find all the supported events for a widget you can take a look at all signals for the widgets:

- [https://docs.nodegui.org/docs/api/generated/globals/#interfaces](https://docs.nodegui.org/docs/api/generated/globals/#interfaces)
- [https://docs.nodegui.org/docs/api/generated/globals/#type-aliases](https://docs.nodegui.org/docs/api/generated/globals/#type-aliases)

> Note that all widgets from nodegui have not been implemented yet. once they are created, their respective events will work right out of the box. You could help us accelerate the process of creating more widgets by contributing to vue-nodegui!
