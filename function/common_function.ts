import * as fs from "fs";
import {browser, by, element, ElementArrayFinder, ElementFinder, protractor} from "protractor";
import {error, isNullOrUndefined, isUndefined} from "util";



export class Utilities {
 
  // public getInnerElements = async (webElement: any, locator: ElementFinder) => {
  //   return webElement.all(locator);
  // };
public getElementLocator = (locatorName: string, locatorValue: string, value: string) => {
    switch (locatorName.toLowerCase()) {
    case "id": 
      return by.id(locatorValue);
    case "name":
      return by.name(locatorValue);
    case "classname":
      return by.className(locatorValue);
    case "xpath":
      return by.xpath(locatorValue);
    case "model":
      return by.model(locatorValue);
    case "repeater":
      return by.repeater(locatorValue);
    case "binding":
      return by.binding(locatorValue);
    case "lintext":
      return by.linkText(locatorValue);
    case "partiallinktext":
      return by.partialLinkText(locatorValue);
    case "css":
      return by.css(locatorValue);
    case "csscontainingtext":
      return by.cssContainingText(locatorValue, value);
    case "tagname":
      return by.tagName(locatorValue);
    case "options":
      return by.options(locatorValue);
    case "buttontext":
      return by.buttonText(locatorValue);
    case "partialbuttontext":
      return by.partialButtonText(locatorValue);
    default:
      break;
    }
  }

public click = async (locator: ElementFinder) => {
    // await this.waitUntilReady(element(locator), elementWaitType, wait, false);
    return element(locator).click().then(() => {
     console.log( "Locator " + locator + " clicked successfully...");
      return true;
    }, (err: Error) => {
        console.log("error. Unable to click..." + err.message);
      return false;
    });
    
  };
  public type = async (locator: ElementFinder, value: any) => {
    // await this.waitUntilReady(element(locator), elementWaitType, wait, false);
    await element(locator).clear();
    return element(locator).sendKeys(value.trim().toString()).then(() => {
      console.log(value +  " entered successfully...");
      return true;
    }, (err: Error) => {
     console.log("error. Unable to enter value..." + err.message);
      return false;
    });
  };
  public getTitle = () => {
    browser.sleep(2000);
    return browser.driver.getTitle().then((text: string) => {
      return text;
    });
  };

  public selectoption = (locator: ElementFinder, value:any )=>{
  element(locator).getText().then(async(selectoption)=>{

   
    for(var i=0;i<=selectoption.length;i++){
    
         console.log(selectoption[i]);
          browser.sleep(1000);
      if(selectoption[i]=="Light"){
     await      element(locator).get(i).click();
      }
    }
  
});
}


}

