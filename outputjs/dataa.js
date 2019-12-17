"use strict";
var data = require('../Readdata/jsonread.json');
describe('Protractor Angular Demo App', function () {
    it('login tests', function () {
        console.log(data.url);
        console.log(data.username);
    });
});
