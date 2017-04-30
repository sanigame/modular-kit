//import liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

// create a component
const Logo = () => {
  return (
    <View style={styles.container}>
      <Text>Logo</Text>
    </View>
  )
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})

//make this component available to the app
export default Logo
