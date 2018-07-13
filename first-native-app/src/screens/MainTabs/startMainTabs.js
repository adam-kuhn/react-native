import {Navigation} from 'react-native-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

const startTabs = () => {
  // Icon.getImageSource returns a promise. So we need to use Promise.All to make sure all icons are recieved, before moving to actually rendering the tabs
  //   Icon.getImageSource('img', 30(size), color)
  Promise.all([
    Icon.getImageSource('md-map', 30),
    Icon.getImageSource('ios-share-alt', 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: 'awesome-places.FindPlaceScreen',
          label: 'Find Place',
          title: 'Find Place',
          icon: sources[0]
        },
        {
          screen: 'awesome-places.SharePlaceScreen',
          label: 'Share Place',
          title: 'Share Place',
          icon: sources[1]

        }
      ]
    })
  })
}

export default startTabs
