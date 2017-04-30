//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

// create a component
class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home on modular</Text>
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
