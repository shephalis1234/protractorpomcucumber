import { login_page } from "../page/login_page";
import { browser } from "protractor";
import using from 'jasmine-data-provider';
let data =require ('D:/Files/PROTRACTOR+TYPESCRIPT/jsonrea.json');
let dataprovide =require ('../data.js');
let loginPage: login_page ;

describe(" Login Scenario->", () => {
 
  beforeEach(async () => {
    loginPage = new login_page();
    await  browser.get(data.url);
    browser.sleep(3000);
  });

  using(dataprovide.datadrive, function (data1, description) {
  
  it("Navigation to Login Page", async () => {
  // browser.imageComparision.saveScreen('fsdhsdjfkshkj',{})
  
  await loginPage.login(data1.username,data1.password);
   browser.sleep(3000);
  const loginPageHeader: string = await  loginPage.getTitle();
  expect("Scorpio-Fleet Management").toEqual(loginPageHeader);
  await  browser.sleep(3000);
});
});



});