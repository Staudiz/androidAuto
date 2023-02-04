const wdio = require("webdriverio");
require('dotenv').config();

const opts = {
    path: '/wd/hub',
    port: 4723,
    capabilities: {
        "appium:platformName": "android",
        "appium:platformVersion": "11",
        "appium:deviceName": "emulator-5554",
        "appium:app": process.env.file_path,
        "appium:automationName": "UiAutomator2"
      }
  };

  async function class_(client, class_){
    return await client.$('android=new UiSelector().className("' + class_ + '")');
  }

  async function text(client, text){
    return await client.$('android=new UiSelector().text("' + text + '")');
  }

  async function resourceId(client, id){
    return await client.$('android=new UiSelector().resourceId("' + id + '")');
  }

  async function loginGoogle(client){
    let email = await resourceId(client, "identifierId");
    await email.click();
    await client.pause(500);
    await email.setValue(process.env.user_email);
    await client.pause(500);
    
    let heeading = await resourceId(client, "headingText");
    await heeading.click();
    await client.pause(500);

    let next;
    try {
        next = await client.$('android=new UiSelector().className("android.widget.Button").text("NEXT")');//Next
        await next.click();
        await client.pause(5000);
    } catch (error) {
        try {  
            next = await client.$('android=new UiSelector().className("android.widget.Button").text("Next")');
            await next.click();
            await client.pause(5000);
        } catch (error) {
            console.error(error);
        }
    }
    
    
    let password = await client.$("android.widget.EditText");
    await password.click();
    await client.pause(500);
    await password.setValue(process.env.PASSWORD);
    await client.pause(500);

    heeading = await resourceId(client, "headingText");
    await heeading.click();
    await client.pause(500);

    try {
        next = await client.$('android=new UiSelector().className("android.widget.Button").text("NEXT")');//Next
        await next.click();
        await client.pause(5000);
    } catch (error) {
        try {  
            next = await client.$('android=new UiSelector().className("android.widget.Button").text("Next")');
            await next.click();
            await client.pause(5000);
        } catch (error) {
            console.error(error);
        }
    }

    try {
        next = await client.$('android=new UiSelector().className("android.widget.Button").text("Don’t turn on")');
        await next.click();
        await client.pause(5000);
        
    } catch (error) {
        console.error(error);
    }
    
    try {
        next = await client.$('android=new UiSelector().className("android.widget.Button").text("I agree")');
        await next.click();
        await client.pause(5000);

        next = await client.$('android=new UiSelector().className("android.widget.Button").text("MORE")');
        await next.click();
        await client.pause(500);

        next = await client.$('android=new UiSelector().className("android.widget.Button").text("ACCEPT")');
        await next.click();
        await client.pause(15000);
    } catch (error) {
        console.error(error);
        
    }
  }
  
async function accountCreation () {
    //kr.dateasia.an:id/radioSexM
	
    //kr.dateasia.an:id/btnSave

    //android:id/text1 Birth year

    //kr.dateasia.an:id/btnSave
}

  async function main () {
    const client = await wdio.remote(opts);
    
    let ConfirmBtn = await resourceId(client, "kr.dateasia.an:id/btnSave");
    await ConfirmBtn.click();
    await client.pause(500);
    
    let ok = await resourceId(client, 'com.android.permissioncontroller:id/permission_allow_foreground_only_button');
    await ok.click();
    await client.pause(500);
    
    let google = await resourceId(client, "kr.dateasia.an:id/btnGoogle");
    await google.click();
    await client.pause(15000);
    
    await loginGoogle(client);
    
    let tac = await resourceId(client, "kr.dateasia.an:id/chkAll");
    await tac.click();
    await client.pause(500);

    ConfirmBtn = await resourceId(client, "kr.dateasia.an:id/btnSave");
    await ConfirmBtn.click();
    await client.pause(500);
    
    await accountCreation(client);

    


    await client.pause(99999);

    await client.deleteSession();
  }
  
  main();
  