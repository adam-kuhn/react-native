import {ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE} from '../actions/actionType'
const initialState = {
  places: [],
  selectedPlace: null
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
          return place.key !== state.selectedPlace.key
        }),
        selectedPlace: null
      }
    }
    case (SELECT_PLACE): {
      return {
        ...state,
        selectedPlace: state.places.find(place => {
          return place.key === action.placeKey
        })

      }
    }
    case (DESELECT_PLACE): {
      return {
        ...state,
        selectedPlace: null
      }
    }
    default:
      return state
  }
}

export default reducer
