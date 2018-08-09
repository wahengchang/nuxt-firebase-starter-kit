const fs = require('fs');
const path = require('path');

const clientLocatorPath = './static/locator.js';

// content could be a for loop
const content = require('./env')();

fs.writeFileSync(path.join(clientLocatorPath), content);
