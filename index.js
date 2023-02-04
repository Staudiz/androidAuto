const wdio = require("webdriverio");
require('dotenv').config();

const opts = {
    path: '/wd/hub',
    port: 4723,
    capabilities: {
        "appium:platformName": "android",
        "appium:platformVersion": "10",
        "appium:deviceName": "emulator-5554",
        "appium:app": process.env.file_path,
        "appium:automationName": "UiAutomator2"
      }
  };

  async function select(client, obj, name){
    const selector = 'new UiSelector().text("' + name + '").className("' + obj + '")'
    return await client.$(`android=${selector}`);
  }
  
  async function main () {
    const client = await wdio.remote(opts);
    let ConfirmBtn = await select(client, "android.widget.Button", "Confirm");
    await ConfirmBtn.click();
    await client.deleteSession();
  }
  
  main();
  