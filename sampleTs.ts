import {browser,element,by} from 'protractor'
import { threadId } from 'worker_threads';
let data =require ('../Readdata/jsonread.json');
describe('Protractor Angular Demo App', ()=> {
    it('login tests',async()=>{
        browser.get(data.url);
        browser.manage().window().maximize();
        
    browser.getTitle().then(function(title){
        console.log(title);
  
    })
   await element(by.id('input-username')).clear();
    element(by.id('input-username')).sendKeys(data.username);
    
    element(by.id('input-password')).sendKeys(data.password);
    
    element(by.xpath('//button[@class="appearance-filled full-width size-large status-primary shape-rectangle transitions"]')).click();
    //  element(by.xpath('//a[@class="sidebar-toggle"]')).click();
       element(by.xpath('//nb-menu/ul/li[2]/a')).click();
    browser.sleep(3000);
    element(by.xpath('//ul/li[5]/a/nb-icon[1]')).click();
    // browser.sleep(2000);
    element(by.cssContainingText('.menu-title','Vessels')).click();
    browser.sleep(5000);
   await element(by.xpath("//a[text()='Add Vessel']")).click();
   browser.sleep(4000);
   await element(by.xpath('//input[@id="vesselName"]')).sendKeys('test');
  
   await element(by.css("input[name='identity']")).sendKeys('test');
   await  element(by.name('callSign')).sendKeys('test');

   await  element(by.name('imoNumber')).sendKeys('324237432');

   await  element(by.name('mmsi')).sendKeys('432498409');
   await  element(by.xpath("//*[@id='vesselOwnerId']/button")).click();
    // element(by.xpath('//nb-menu/ul/li[2]/ul/li[2]/a')).click();
   
   
    // element(by.xpath('//*[@id="cdk-overlay-0"]/div/ul/nb-option')).click();

 let list= element.all(by.xpath('//*[@id="cdk-overlay-0"]/div/ul/nb-option'));

 
  list.getText().then(async(option)=>{

   
    for(var i=0;i<=option.length;i++){
    
        await  console.log(option[i]);
          browser.sleep(1000);
      if(option[i]=="Test2"){
     await     list.get(i).click();
      }
    }
});

browser.executeScript('window.scrollTo(0,600)');

element(by.xpath("//*[@id='operatorId']/button")).click();

    let list1= element.all(by.xpath('//*[@id="cdk-overlay-2"]/div/ul/nb-option'));
  list1.getText().then(async(antioption)=>{
       await browser.sleep(2000);
       console.log(antioption);
        for(var i=0;i<=antioption.length;i++){
        
              console.log(antioption[i]);
              browser.sleep(4000);
          if(antioption[i]=="Bahra"){
            await   list1.get(i).click();
          }
        }
    
  });


});
    // expect(option.length).toEqual(4);
// var option=element.all(by.xpath('//*[@id="cdk-overlay-0"]/div/ul/nb-option'));
// console.log(option[1].getText());

//  for(var i=0; i<option.length; i++){

//         option[i].getText().then(function(text){

        
            
//         })
//  };
// })  


       
    
     
    });
  