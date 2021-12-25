# CrowdFinder

## Team Members
- AFIQ NAZRIE RABBANI A19EC0216
- ARIF AMIRUDDIN BIN SADIRAN A19EC0022
- MUHAMMAD ISKANDAR ZULQARNAIN BIN MOHD ISHAK A19EC0098
- MUHAMMAD NAZREEN BIN MUBIN A19EC0104
- WAN MUHAMMAD FIKRI BIN WAN FAUZI A19EC0175

## Description
CrowdFinder is an app …

## Technology Stacks
- Front-end
  - `react-native`: Client application
- Back-end
  - `mongodb` Atlas: Database
  - `mongodb` Realm: Backend-as-a-Service
  - `graphql`: API

## Local App Development Setup
### Notices
This app's development build can only being run using either **Android device or emulator**, as `realm-js` currently do not have support for web preview (see [realm/realm-js/issues/4174#issuecomment-1000767980](https://github.com/realm/realm-js/issues/4174#issuecomment-1000767980)).

### Prerequisites
#### JavaScript
- `nodejs 14`
- `npm 8`
- `expo-cli 5` ->  `sudo npm install -g expo-cli`

#### Java
- `java 11` (`openjdk 11` or `adoptopenjdk 11` is preferred)
- `gradle 7`

#### Android SDK
- `android-platform 29` -> `sdkmanager …`
- `android-sdk-cmdline-tools 5` -> 
- `android-sdk-platform-tools >=27` (`31` is preferred) -> `sdkmanager …` or `sudo apt install android-sdk-platform-tools`
- `android-sdk-build-tools 29.0.2` -> `sdkmanager …`

### Steps
#### Before You Go …
- Make sure all required dependencies in the list above are installed
- Make sure you are in branch `develop-v2`
``` sh
  git checkout develop-v2
```

- Make sure you have Android phone connected via ADB
##### To Connect ADB in WSL2
0. Open `powershell`
1. Install https://github.com/dorssel/usbipd-win . Follow the provided instruction.
```powershell
  winget install --interactive --exact dorssel.usbipd-win
```
2. Get Android device bus ID
``` sh
  usbipd list
```
3. Attach Android device to WSL2
```sh
  usbipd bind --busid=<busid>
```
4. Check ADB request in Android device

#### Install Custom Dev Client Application
1. Clean install `node_modules`
``` sh
  npm ci
```
2. Bootstrap native Android build configuration (eventually it wil run until the app is opened in the phone)
``` sh
  expo run:android
```

#### Run Custom Dev Client Application
1. Run the app using `expo-dev-client`. Either use ADB connection or scan the generated QR with the installed custom dev client application.
``` sh
  expo start --dev-client
```
