//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

// create a component
class Home extends Component {
  render() {
    return (
      <View>
        <Text>Home on modular</Text>
        <Button
          onPress={()=>Actions.modularAbout()}
          title="About Scene"
          color="orange"
          accessibilityLabel="Go to about scene" />
        <Button
          onPress={()=>Actions.modularForm()}
          title="Form"
          color="blue"
          accessibilityLabel="Go to form scene" />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

//make this component available to the app
export default Home;
