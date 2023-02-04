# androidAuto

- sdkmanager "system-images;android-30;google_apis_playstore;x86"
- avdmanager create avd -n TestNexus -k "system-images;android-30;google_apis_playstore;x86" -d "Nexus 5"
- emulator @TestNexus

```json
{
  "appium:platformName": "android",
  "appium:platformVersion": "10",
  "appium:deviceName": "emulator-5554",
  "appium:app": "C:\\Users\\sstau\\Desktop\\appium\\DateAsia - Interesting Asian D_4.2_Apkpure.apk",
  "fullReset": false
}
```
