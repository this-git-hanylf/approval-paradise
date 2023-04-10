<div id="header" align="center">
  <img src="https://media.giphy.com/media/h408T6Y5GfmXBKW62l/giphy.gif" width="400"/>
  &nbsp;
  <div id="badges" align="center">
    <img src="https://komarev.com/ghpvc/?username=ZakariaWijaya&style=flat-square&color=blue" alt=""/>
    <img alt="npm" src="https://img.shields.io/npm/v/react-native?color=blue&label=react&style=flat-square">
    <img alt="npm" src="https://img.shields.io/npm/v/react?color=b&label=react&style=flat-square">
  </div>
</div>

# approval-pakubuwono
Approval Mobile Pakubuwono



# Installation
```
$ yarn install .
```

# Run Android
> react-native start
```
$ yarn start
```
> react-native run-android
```
$ yarn android
```
# Run Ios
> react-native start
```
$ yarn start
```
> react-native run-ios
```
$ yarn ios
```

# Build Android Release
> gradlew app:assembleRelease
```
$ build-android-release
```
> aab release app:bundleRelease
```
$ build-aab-release
```


# Troubleshooting
> for RN 70 error AxiosError: Network Error 
- solve :
- android:usesCleartextTraffic="true"
- android/app/src/main/AndroidManifest.xml

> useTheme() in @react-navigation/native
```
const DefaultTheme: Theme = {
  dark: false,
  colors: {
    primary: 'rgb(0, 118, 56)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(216, 216, 216)',
    notification: 'rgb(255, 59, 48)',
  },
};
```
