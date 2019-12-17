"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var data = require('../Readdata/jsonread.json');
describe('Protractor Angular Demo App', function () {
    it('login tests', function () { return __awaiter(void 0, void 0, void 0, function () {
        var list, list1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    protractor_1.browser.get(data.url);
                    protractor_1.browser.manage().window().maximize();
                    protractor_1.browser.getTitle().then(function (title) {
                        console.log(title);
                    });
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.id('input-username')).clear()];
                case 1:
                    _a.sent();
                    protractor_1.element(protractor_1.by.id('input-username')).sendKeys(data.username);
                    protractor_1.element(protractor_1.by.id('input-password')).sendKeys(data.password);
                    protractor_1.element(protractor_1.by.xpath('//button[@class="appearance-filled full-width size-large status-primary shape-rectangle transitions"]')).click();
                    //  element(by.xpath('//a[@class="sidebar-toggle"]')).click();
                    protractor_1.element(protractor_1.by.xpath('//nb-menu/ul/li[2]/a')).click();
                    protractor_1.browser.sleep(3000);
                    protractor_1.element(protractor_1.by.xpath('//ul/li[5]/a/nb-icon[1]')).click();
                    // browser.sleep(2000);
                    protractor_1.element(protractor_1.by.cssContainingText('.menu-title', 'Vessels')).click();
                    protractor_1.browser.sleep(5000);
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.xpath("//a[text()='Add Vessel']")).click()];
                case 2:
                    _a.sent();
                    protractor_1.browser.sleep(4000);
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.xpath('//input[@id="vesselName"]')).sendKeys('test')];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.css("input[name='identity']")).sendKeys('test')];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.name('callSign')).sendKeys('test')];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.name('imoNumber')).sendKeys('324237432')];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.name('mmsi')).sendKeys('432498409')];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.xpath("//*[@id='vesselOwnerId']/button")).click()];
                case 8:
                    _a.sent();
                    list = protractor_1.element.all(protractor_1.by.xpath('//*[@id="cdk-overlay-0"]/div/ul/nb-option'));
                    list.getText().then(function (option) { return __awaiter(void 0, void 0, void 0, function () {
                        var i;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    i = 0;
                                    _a.label = 1;
                                case 1:
                                    if (!(i <= option.length)) return [3 /*break*/, 5];
                                    return [4 /*yield*/, console.log(option[i])];
                                case 2:
                                    _a.sent();
                                    protractor_1.browser.sleep(1000);
                                    if (!(option[i] == "Test2")) return [3 /*break*/, 4];
                                    return [4 /*yield*/, list.get(i).click()];
                                case 3:
                                    _a.sent();
                                    _a.label = 4;
                                case 4:
                                    i++;
                                    return [3 /*break*/, 1];
                                case 5: return [2 /*return*/];
                            }
                        });
                    }); });
                    protractor_1.browser.executeScript('window.scrollTo(0,600)');
                    protractor_1.element(protractor_1.by.xpath("//*[@id='operatorId']/button")).click();
                    list1 = protractor_1.element.all(protractor_1.by.xpath('//*[@id="cdk-overlay-2"]/div/ul/nb-option'));
                    list1.getText().then(function (antioption) { return __awaiter(void 0, void 0, void 0, function () {
                        var i;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                                case 1:
                                    _a.sent();
                                    console.log(antioption);
                                    i = 0;
                                    _a.label = 2;
                                case 2:
                                    if (!(i <= antioption.length)) return [3 /*break*/, 5];
                                    console.log(antioption[i]);
                                    protractor_1.browser.sleep(4000);
                                    if (!(antioption[i] == "Bahra")) return [3 /*break*/, 4];
                                    return [4 /*yield*/, list1.get(i).click()];
                                case 3:
                                    _a.sent();
                                    _a.label = 4;
                                case 4:
                                    i++;
                                    return [3 /*break*/, 2];
                                case 5: return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
            }
        });
    }); });
    // expect(option.length).toEqual(4);
    // var option=element.all(by.xpath('//*[@id="cdk-overlay-0"]/div/ul/nb-option'));
    // console.log(option[1].getText());
    //  for(var i=0; i<option.length; i++){
    //         option[i].getText().then(function(text){
    //         })
    //  };
    // })  
});
