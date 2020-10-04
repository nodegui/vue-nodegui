# Vue NodeGui
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![Join the NodeGUI community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/nodegui)

Build **performant**, **native** and **cross-platform** desktop applications with Vue.🚀

Vue NodeGUI is powered by **Vue** 🌈 and **Qt5** 💚 which makes it CPU and memory efficient as compared to other chromium based solutions like electron. Vue NodeGUI is essentially a Vue renderer for [NodeGUI](https://github.com/nodegui/nodegui).

Visit: https://vue.nodegui.org for docs.

<img alt="logo" src="https://github.com/nodegui/nodegui/raw/master/extras/logo/nodegui.png" height="200" />

> This project is in active development. It should be okay for smaller projects but anything complex - electron is the way to go for now. 🚧

## Features

- 🧬 Cross platform. Should work on major Linux flavours, Windows and MacOS
- 📉 Low CPU and memory footprint. Current CPU stays at 0% on idle and memory usage is under 20mb for a hello world program.
- 💅 Styling with CSS (includes actual cascading). Also has full support for Flexbox layout (thanks to Yoga).
- ✅ Complete Nodejs api support (Currently runs on Node v12.x - and is easily upgradable). Hence has access to all nodejs compatible npm modules.
- 🎪 Native widget event listener support. supports all event available from Qt / NodeJs.
- 💸 Can be used for Commercial applications.
- 📚 Good documentation and website.
- 🧙‍♂️ Good documentation for contributors.
- 🦹🏻‍♀️ Good support for dark mode (Thanks to QT).

## Getting Started

- Check out the [vue-nodegui starter repo](https://github.com/nodegui/vue-nodegui-starter)
- Read through the [docs](https://vue.nodegui.org)

## Docs for contributing

Looking to contribute? If you wish to implement a new widget/add more features and need help understanding the codebase. You can start here:

Contributing developer docs link:

https://github.com/nodegui/nodegui/tree/master/website/docs/development

Please read: https://github.com/nodegui/.github/blob/master/CONTRIBUTING.md

## Building

`npm run build`

## Using custom Qt

`QT_INSTALL_DIR=/path/to/qt npm install`

`npm run build`

## Updating docs

`npm run docs`

then followed by:

`cd website &&  GIT_USER=<your_git_username> yarn deploy`

## Funding

Vue NodeGUI is an open source project and requires your support. If you like this project, please consider supporting my work by clicking on the sponsor button on this Github repo or via Ko-Fi / Patreon. We will soon launch issuehunt.

<p>
 <a href='https://ko-fi.com/shubhamzanwar' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://az743702.vo.msecnd.net/cdn/kofi4.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a> &nbsp; &nbsp; 
 <a href="https://www.patreon.com/shubhamzanwar"><img alt="patreon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6Vwdt8lWjAfo5blHIj1M1vn6E0ZamZui0RA&usqp=CAU"  height="36px" /></a>
</p>

## Special Thanks

- [Logo: Thanks to Vishwas Shetty from the Noun Project.](https://github.com/nodegui/nodegui/blob/master/extras/legal/logo/thanks.md)

## Code of Conduct

https://github.com/nodegui/.github/blob/master/CODE_OF_CONDUCT.md

## License

MIT

## Maintainers ✨

People maintaining this project.

<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://twitter.com/szanwar22"><img src="https://avatars0.githubusercontent.com/u/15626155?v=4" width="100px;" alt="Shubham Zanwar"/><br /><sub><b>Shubham Zanwar</b></sub></a></td>
  </tr>
</table>

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://gregbenner.life"><img src="https://avatars3.githubusercontent.com/u/1177690?v=4" width="100px;" alt=""/><br /><sub><b>Greg B</b></sub></a><br /><a href="https://github.com/nodegui/vue-nodegui/commits?author=gregbenner" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/rohinivsenthil"><img src="https://avatars1.githubusercontent.com/u/42040329?v=4" width="100px;" alt=""/><br /><sub><b>Rohini Senthil</b></sub></a><br /><a href="https://github.com/nodegui/vue-nodegui/commits?author=rohinivsenthil" title="Documentation">📖</a> <a href="https://github.com/nodegui/vue-nodegui/commits?author=rohinivsenthil" title="Code">💻</a></td>
    <td align="center"><a href="https://michaeltintiuc.com"><img src="https://avatars2.githubusercontent.com/u/1321256?v=4" width="100px;" alt=""/><br /><sub><b>Michael Tintiuc</b></sub></a><br /><a href="#infra-michaeltintiuc" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="https://tusharmoraye.github.io/"><img src="https://avatars3.githubusercontent.com/u/25436413?v=4" width="100px;" alt=""/><br /><sub><b>Tushar Moraye</b></sub></a><br /><a href="#infra-tusharmoraye" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!