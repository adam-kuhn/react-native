import React from 'react'
import {View, StyleSheet} from 'react-native'

const List = (props) => {
  return (
    <View style={styles.listContainer}>
      {props.listOfPlaces}
    </View>
  )
}

export default List

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
})
