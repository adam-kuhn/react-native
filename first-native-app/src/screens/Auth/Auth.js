import React, {Component} from 'react'
import {View, Text, Button, TextInput, StyleSheet} from 'react-native'

import startMaintabs from '../MainTabs/startMainTabs'

class AuthScreen extends Component {
  loginHandler = () => {
    startMaintabs()
  }
  render () {
    return (
      <View style={styles.container}>
        <Text>Please Login</Text>
        <Button title="Switch to Login" />
        <View style={styles.inputContainer}>
          <TextInput placeholder='Your Email address' style={styles.input}/>
          <TextInput placeholder='Password' style={styles.input}/>
          <TextInput placeholder='Confirm Password' style={styles.input}/>
        </View>
        <Button title='Submit' onPress={this.loginHandler}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // gives us access to the whole page, by making the view fill up the entier screen.
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  // need to set input width otherwise it will take up smallest amount of space possible which is essentially zero
  // careful with hardcoding values i.e width: 300, because this may be larger than some devices
  inputContainer: {
    width: '80%'
  },
  input: {
    width: '100%'
  }
})

export default AuthScreen
