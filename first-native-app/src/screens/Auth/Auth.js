import React, {Component} from 'react'
import {View, ImageBackground, Button, StyleSheet} from 'react-native'

import startMaintabs from '../MainTabs/startMainTabs'
import DefaultInput from '../../components/UI/Defaultinput'
import HeadingText from '../../components/UI/HeadingText'
import ButtonWithBackground from '../../components/UI/ButtonWithBackground'
import MainText from '../../components/UI/MainText'

import backgroundImg from '../../assets/background.jpg'

class AuthScreen extends Component {
  loginHandler = () => {
    startMaintabs()
  }
  render () {
    return (
      // when using ImageBackground have to set the width
      <ImageBackground source={backgroundImg} style={styles.backgroundImage}>
        <View style={styles.container}>
          <MainText>
            <HeadingText>Please Login</HeadingText>
          </MainText>
          <ButtonWithBackground color={'#29aaf4'} onPress={() => alert('hello')}>Switch to Login</ButtonWithBackground>
          <View style={styles.inputContainer}>
            {/* underlineColorAndroid=transparent gets rid of the defaul line that appears under the inputs in android */}
            <DefaultInput placeholder='Your Email address' style={styles.input}/>
            <DefaultInput placeholder='Password' style={styles.input} />
            <DefaultInput placeholder='Confirm Password' style={styles.input} />
          </View>
          <ButtonWithBackground onPress={this.loginHandler} color={'#29aaf4'}>Submit</ButtonWithBackground>
        </View>
      </ImageBackground>
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
  backgroundImage: {
    width: '100%',
    flex: 1
  },
  // need to set input width otherwise it will take up smallest amount of space possible which is essentially zero
  // careful with hardcoding values i.e width: 300, because this may be larger than some devices
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: '#eee',
    borderColor: '#bbb'
  }
})

export default AuthScreen
