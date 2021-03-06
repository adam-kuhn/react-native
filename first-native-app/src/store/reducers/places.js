import {ADD_PLACE, DELETE_PLACE} from '../actions/actionType'
const initialState = {
  places: []
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (ADD_PLACE): {
      return {
        ...state,
        places: state.places.concat({
          key: Math.random().toString(),
          name: action.placeName,
          // when image is imported it stored as a JS object that can be rendered on the app, not just a path
          // image: placeImage
          image: {
            // image address
            // images loaded over the internet must be styled
            uri: 'https://www.planwallpaper.com/static/images/Cool-HD-Wallpapers-1_9j9pfu8.jpg'
          }
        })
      }
    }
    case (DELETE_PLACE): {
      return {
        ...state,
        places: state.places.filter((place) => {
          return place.key !== action.key
        })
      }
    }
    default:
      return state
  }
}

export default reducer
