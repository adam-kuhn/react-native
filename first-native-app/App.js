import {Navigation} from 'react-native-navigation'

import AuthScreen from './src/screens/Auth/Auth.js'
import SharePlaceScreen from './src/screens/MainTabs/SharePlace/SharePlace'
import FindPlaceScreen from './src/screens/MainTabs/FindPlace/FindPlace'
// Register Screens
// naming convention is App name '.' ScreenName
// Screens are how we navigate on react-native. Think of as pages our routes on the web
// import all screens in this app File
Navigation.registerComponent('awesome-places.AuthScreen', () => AuthScreen)
Navigation.registerComponent('awesome-places.SharePlaceScreen', () => SharePlaceScreen)
Navigation.registerComponent('awesome-places.FindPlaceScreen', () => FindPlaceScreen)

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: 'awesome-places.AuthScreen',
    title: 'Login'
  }
})
