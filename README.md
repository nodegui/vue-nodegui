# Vue NodeGui

[![Join the NodeGUI community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/nodegui)

Build **performant**, **native** and **cross-platform** desktop applications with Vue.🚀

Vue NodeGUI is powered by **Vue** 🌈 and **Qt5** 💚 which makes it CPU and memory efficient as compared to other chromium based solutions like electron. Vue NodeGUI is essentially a Vue renderer for [NodeGUI](https://github.com/nodegui/nodegui).

Visit: https://vue.nodegui.org for docs.

<img alt="logo" src="https://github.com/nodegui/nodegui/raw/master/extras/logo/nodegui.png" height="200" />

> This project is in active development. It should be okay for smaller projects but anything complex - electron is the way to go for now. 🚧

## How does it look?

<div style="display:inline; margin: 0 auto;">
<img alt="demo_linux" src="https://github.com/nodegui/examples/raw/master/react-nodegui/calculator/calculator_linux.png" height="280" />
<img alt="demo_win" src="https://github.com/nodegui/examples/raw/master/react-nodegui/calculator/calculator_win.jpg" height="280" />
<img alt="demo_mac" src="https://github.com/nodegui/examples/raw/master/react-nodegui/calculator/calculator_mac.png" height="280" />
</div>

<div style="display:inline; margin: 0 auto;"><img alt="kitchen" src="https://github.com/nodegui/nodegui/raw/master/extras/assets/kitchen.png" height="280" /><img alt="demo_mac" src="https://github.com/nodegui/examples/raw/master/react-nodegui/weather-app-widget/weather_widget_mac.png" height="280" /><img alt="demo_win" src="https://github.com/nodegui/examples/raw/master/react-nodegui/image-view/image_view_win.jpg" height="280" />
</div>

**More screenshots?**

[See examples](https://github.com/nodegui/examples/)

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

- Check out the starter repo (Coming soon - Currently, you can check the demo folder in this repo)
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
