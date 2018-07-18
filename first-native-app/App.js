import {Navigation} from 'react-native-navigation'
import {Provider} from 'react-redux'

import AuthScreen from './src/screens/Auth/Auth.js'
import SharePlaceScreen from './src/screens/MainTabs/SharePlace/SharePlace'
import FindPlaceScreen from './src/screens/MainTabs/FindPlace/FindPlace'
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail'
// configureStore, is the same code from App.js
import configureStore from './src/store/configureStore'

const store = configureStore()
// Register Screens
// naming convention is App name '.' ScreenName
// Screens are how we navigate on react-native. Think of as pages our routes on the web
// import all screens in this app File
// to connect to redux pass Provider, and store to the screen. If redux is not needed don't worry about passing anything
Navigation.registerComponent('awesome-places.AuthScreen', () => AuthScreen, store, Provider)
Navigation.registerComponent('awesome-places.SharePlaceScreen', () => SharePlaceScreen, store, Provider)
Navigation.registerComponent('awesome-places.FindPlaceScreen', () => FindPlaceScreen, store, Provider)
Navigation.registerComponent('awesome-places.PlaceDetailScreen', () => PlaceDetailScreen)

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: 'awesome-places.AuthScreen',
    title: 'Login'
  }
})
