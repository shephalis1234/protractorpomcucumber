import { login_page } from "../page/login_page";
import { browser,element,by } from "protractor";
import { homepage } from "../page/homepage";
// let data =require ('../jsonrea.json');

let loginPage: login_page ;
let homePage:  homepage;
describe("LandSend Login Scenario->", () => {
    beforeAll(async () => {
console.log("");
console.log("");

        loginPage =new login_page();
    homePage =new homepage();
       
      });

    
   
  

it("Navigation to Home Page", async () => {
  await  browser.get('https://scorpiostoragedev.z6.web.core.windows.net/auth/login');
  
 await  loginPage.login("administrator","Admin@123");

 await  browser.sleep(3000);
 await  homePage.home("Corporate");
//  let list= element.all(by.xpath('//*[@id="cdk-overlay-0"]/div/ul/nb-option'));

 
//   list.getText().then(async(option)=>{

   
//     for(var i=0;i<=option.length;i++){
    
//         await  console.log(option[i]);
//           browser.sleep(1000);
//       if(option[i]=="Dark"){
//      await     list.get(i).click();
//       }
//     }
// });
 await  browser.sleep(3000);
 const homePageHeader: string = await  homePage.getTitle();
 console.log(homePageHeader);
 expect("Scorpio-Fleet Management").toEqual(homePageHeader);
 await  browser.sleep(3000);
});


});