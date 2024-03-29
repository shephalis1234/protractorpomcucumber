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
var Utilities = /** @class */ (function () {
    function Utilities() {
        var _this = this;
        // public getInnerElements = async (webElement: any, locator: ElementFinder) => {
        //   return webElement.all(locator);
        // };
        this.getElementLocator = function (locatorName, locatorValue, value) {
            switch (locatorName.toLowerCase()) {
                case "id":
                    return protractor_1.by.id(locatorValue);
                case "name":
                    return protractor_1.by.name(locatorValue);
                case "classname":
                    return protractor_1.by.className(locatorValue);
                case "xpath":
                    return protractor_1.by.xpath(locatorValue);
                case "model":
                    return protractor_1.by.model(locatorValue);
                case "repeater":
                    return protractor_1.by.repeater(locatorValue);
                case "binding":
                    return protractor_1.by.binding(locatorValue);
                case "lintext":
                    return protractor_1.by.linkText(locatorValue);
                case "partiallinktext":
                    return protractor_1.by.partialLinkText(locatorValue);
                case "css":
                    return protractor_1.by.css(locatorValue);
                case "csscontainingtext":
                    return protractor_1.by.cssContainingText(locatorValue, value);
                case "tagname":
                    return protractor_1.by.tagName(locatorValue);
                case "options":
                    return protractor_1.by.options(locatorValue);
                case "buttontext":
                    return protractor_1.by.buttonText(locatorValue);
                case "partialbuttontext":
                    return protractor_1.by.partialButtonText(locatorValue);
                default:
                    break;
            }
        };
        this.click = function (locator) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // await this.waitUntilReady(element(locator), elementWaitType, wait, false);
                return [2 /*return*/, protractor_1.element(locator).click().then(function () {
                        console.log("Locator " + locator + " clicked successfully...");
                        return true;
                    }, function (err) {
                        console.log("error. Unable to click..." + err.message);
                        return false;
                    })];
            });
        }); };
        this.type = function (locator, value) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // await this.waitUntilReady(element(locator), elementWaitType, wait, false);
                    return [4 /*yield*/, protractor_1.element(locator).clear()];
                    case 1:
                        // await this.waitUntilReady(element(locator), elementWaitType, wait, false);
                        _a.sent();
                        return [2 /*return*/, protractor_1.element(locator).sendKeys(value.trim().toString()).then(function () {
                                console.log(value + " entered successfully...");
                                return true;
                            }, function (err) {
                                console.log("error. Unable to enter value..." + err.message);
                                return false;
                            })];
                }
            });
        }); };
        this.getTitle = function () {
            protractor_1.browser.sleep(2000);
            return protractor_1.browser.driver.getTitle().then(function (text) {
                return text;
            });
        };
        this.selectoption = function (locator, value) {
            protractor_1.element(locator).getText().then(function (selectoption) { return __awaiter(_this, void 0, void 0, function () {
                var i;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            i = 0;
                            _a.label = 1;
                        case 1:
                            if (!(i <= selectoption.length)) return [3 /*break*/, 4];
                            console.log(selectoption[i]);
                            protractor_1.browser.sleep(1000);
                            if (!(selectoption[i] == "Light")) return [3 /*break*/, 3];
                            return [4 /*yield*/, protractor_1.element(locator).get(i).click()];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3:
                            i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
        };
    }
    return Utilities;
}());
exports.Utilities = Utilities;
