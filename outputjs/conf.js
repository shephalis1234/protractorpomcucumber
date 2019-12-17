"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var join = require('path').join;
exports.config = {
    capabilities: {
        browserName: 'chrome',
    },
    chromeDriver: '../node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_79.0.3945.36.exe',
    onPrepare: function () {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.manage().window().maximize();
    },
    // set to "custom" instead of cucumber.
    framework: 'jasmine',
    // path relative to the current config file
    // require feature files
    specs: [
        // './sampleTs.js' // accepts a glob
        './test/login.js'
    ],
    directConnect: true
    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
};
