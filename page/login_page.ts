import { loginPage } from "../Page_object/loginpageobject";
import { Utilities } from "../function/common_function";
import { browser } from "protractor";
const ProtractorImageComparison = require('protractor-image-comparison');


export class login_page extends Utilities {

  private usrName: any = this.getElementLocator(loginPage.usrName.locatorName, loginPage.usrName.locatorValue, "undefined");

  private pass: any = this.getElementLocator(loginPage.pass.locatorName, loginPage.pass.locatorValue, "undefined");

  private loginBtn: any = this.getElementLocator(loginPage.loginBtn.locatorName, loginPage.loginBtn.locatorValue, "undefined");
  public login = async (usrName: string, pass: string) => {
    await this.type(this.usrName, usrName);
    await this.type(this.pass, pass);
    // browser.imageComparision.checkscreen('sys');
    // expect(await browser.ProtractorImageComparison.checkScreen('examplePaged').toEqual(0));
    await this.click(this.loginBtn);
  }
  
}