import { homePage } from "../Page_object/homepageobject";
import { Utilities } from "../function/common_function";


export class homepage extends Utilities {

  private light: any = this.getElementLocator(homePage.light.locatorName, homePage.light.locatorValue, "undefined");

  private locatoroption: any = this.getElementLocator(homePage.lightOption.locatorName, homePage.lightOption.locatorValue, "undefined");

//   private loginBtn: any = this.getElementLocator(loginPage.loginBtn.locatorName, loginPage.loginBtn.locatorValue, "undefined");
  public home = async (option: string) => {
    // await this.type(this.usrName, usrName);
    // await this.type(this.pass, pass);
    await this.click(this.light);
    await this.selectoption(this.locatoroption,option);
    
    console.log("cucumber11");
   
    console.log("cucumber31");
   console.log("cucumber51");
  
  console.log("cucumber71");
   console.log("cucumber91");
  }
  
}