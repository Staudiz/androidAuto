# androidAuto
## Setup Emulator
```cmd
sdkmanager "system-images;android-30;google_apis_playstore;x86"
avdmanager create avd -n TestNexus -k "system-images;android-30;google_apis_playstore;x86" -d "Nexus 5"
emulator @TestNexus
adb devices
```

## Setup Appium
- Install appium desktop
- Start appium dektop
- download appium Inpector
- start appium Inspector 
- path: /wd/hub
- Paste json

```json
{
  "appium:platformName": "android",
  "appium:platformVersion": "10",
  "appium:deviceName": "emulator-5554",
  "appium:app": "<path>",
  "fullReset": false
}
```
