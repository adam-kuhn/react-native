import React from 'react'
import {StyleSheet, FlatList} from 'react-native'

import ListItem from '../ListItem/ListItem'

const List = (props) => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.listOfPlaces}
      renderItem={(info) => (
        // the () after the fat arrow mean don't have to write return
        // props.places is our places array that now holds an array of objects
        // these objects are the items rendered in the component below hence info.item.value
        <ListItem
          placeName={info.item.name}
          placeImage={info.item.image}
          onItemPress={() => props.onItemDeleted(info.item.key)}
        />
      )}
    />
  )
}

export default List

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
})
