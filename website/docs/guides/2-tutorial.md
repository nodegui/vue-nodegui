---
sidebar_label: Learn the Basics
title: Learn the Basics
---

Vue NodeGui uses native components instead of web based components as building blocks. So to understand the basic structure of a Vue NodeGui app, you need to be familiar with Javascript or Typescript and Vue. This tutorial is aimed at everyone who has some web experience with web development.

## Vue NodeGui development in a nutshell

As far as development is concerned, an Vue NodeGui application is essentially a Node.js application. The starting point is a `package.json` that is identical to that of a Node.js module. A most basic Vue NodeGui app would have the following
folder structure:

```text
your-app/
├── package.json
├── main.js
├── App.vue
```

All APIs and features found in NodeGui are accessible through the `@nodegui/vue-nodegui` and `@nodegui/nodegui` modules, which can be required like any other Node.js module. Additionally you have access to all Node.js apis and node modules.

```javascript
require("@nodegui/vue-nodegui");
```

The `@nodegui/vue-nodegui` module exports widgets and features in namespaces. As an example, a window can be created
using the `Window` component. A simple `main.js` file might open a window:

```javascript
import { createApp } from '@nodegui/vue-nodegui';
import App from './App.vue';

createApp(App).mount();
```

Add the following code to your `App.vue` file:

```html
<template>
</template>

<script>
  export default { }
</script>

```

The `main.js` should create windows and handle all the system events your
application might encounter.

## What's going on here?

Firstly, we are running a Node.js app and not a browser based app. This means we do not have access to any browser APIs. The window you see is actually a native widget created by Qt. Window component is essentially a lightweight javascript wrapper over NodeGui's QMainWindow, which internally is Qt's QMainWindow. This component is automatically created by the `createApp` function. In future releases, you will be able to add props to this component too. This is very light weight as compared to browser based solutions and hence is more closer to the Operating system.

## Trying out the starter project

Clone and run the code by using the
[`nodegui/vue-nodegui-starter`][quick-start] repository.

**Note**: Running this requires [Git](https://git-scm.com) and [npm](https://www.npmjs.com/).

```sh
# Clone the repository
$ git clone https://github.com/nodegui/vue-nodegui-starter

# Go into the repository
$ cd vue-nodegui-starter

# Install dependencies
$ npm install

# Run the dev server
$ npm run dev
```

[quick-start]: https://github.com/nodegui/vue-nodegui-starter

## What else other than a basic window?

Vue NodeGui has support for basic components like View (similar to div), CheckBox, PushButton and many more.
You can take a look at the list of native widgets that Vue NodeGui currently supports here : [Native widgets in Vue NodeGui](/docs/api/interfaces/viewprops).
With time more native components and APIs will be added to Vue NodeGui. Apart from modules in Vue NodeGui, you also have access to the entire node modules ecosystem. Thus, any node module that you can use with Node.js, can be used with Vue NodeGui. This makes it extremely powerful.

Fine, I want something more custom and beautiful than just native looking widgets. What do I do?

To make things more beautiful, you will have to [learn about styling](styling). Lets take a look at that next.