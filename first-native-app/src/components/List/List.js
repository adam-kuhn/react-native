import React from 'react'
import {StyleSheet, ScrollView} from 'react-native'

import ListItem from '../ListItem/ListItem'

const List = (props) => {
  const placesOutput = props.listOfPlaces.map((place, i) => {
    return (
      <ListItem key={i} placeName={place}
        onItemPress={() => props.onItemDeleted(i)} />
    )
  })
  return (
    <ScrollView style={styles.listContainer}>
      {placesOutput}
    </ScrollView>
  )
}

export default List

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
})
