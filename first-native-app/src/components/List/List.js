import React from 'react'
import {View, StyleSheet} from 'react-native'

import ListItem from '../ListItem/ListItem'

const List = (props) => {
  const placesOutput = props.listOfPlaces.map((place, i) => {
    return (
      <ListItem key={i} placeName={place} />
    )
  })
  return (
    <View style={styles.listContainer}>
      {placesOutput}
    </View>
  )
}

export default List

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
})
