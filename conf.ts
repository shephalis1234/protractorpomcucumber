import{Config, browser} from 'protractor'
const { join } = require('path');




export let config :Config= {
    capabilities: {
        browserName: 'chrome',
    
    // chromeOptions: {
    //     args: ["--headless", "--disable-gpu", "--window-size=800x600"]
    // }
},

chromeDriver: '../node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_79.0.3945.36.exe',
onPrepare: () => {
  
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();

 

    
    
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
