import {ADD_PLACE, DELETE_PLACE} from './actionType'

export const addPlace = (placeName) => {
  return {
    type: ADD_PLACE,
    placeName
  }
}

export const deletePlace = () => {
  return {
    type: DELETE_PLACE
  }
}
