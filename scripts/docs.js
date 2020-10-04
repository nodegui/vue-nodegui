const fs = require('fs');
const path = require('path');

const API_PATH = path.resolve(__dirname, '../website/docs/api');
const SIDEBARS_FILE = path.resolve(__dirname, '../website/sidebars.js');
const sidebarsData = require('../website/sidebars');

['index.md', 'globals.md'].forEach((fileName) => {
  if (fs.existsSync(`${API_PATH}/${fileName}`)) {
    fs.unlinkSync(`${API_PATH}/${fileName}`);
  }
});

if (sidebarsData.guides && sidebarsData.guides.Interfaces) {
  const interfaces = sidebarsData.guides.Interfaces;
  delete sidebarsData.guides.Interfaces;

  if (sidebarsData.api) {
    sidebarsData.api.Interfaces = interfaces;

    if (sidebarsData.api.Widgets) {
      delete sidebarsData.api.Widgets;
    }
  }

  if (fs.existsSync(SIDEBARS_FILE)) {
    const data = `module.exports = ${JSON.stringify(sidebarsData, null, 2)}`;
    fs.writeFileSync(SIDEBARS_FILE, data);
  }
}

function cleanApiDocs() {
  if (fs.existsSync(API_PATH)) {
    fs.rmdirSync(API_PATH, { recursive: true });
  }
}

module.exports = { cleanApiDocs };
