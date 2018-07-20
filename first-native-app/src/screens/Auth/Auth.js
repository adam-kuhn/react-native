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
        <TextInput placeholder='Your Email address'/>
        <TextInput placeholder='Password'/>
        <TextInput placeholder='Confirm Password'/>
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
  }
})

export default AuthScreen
