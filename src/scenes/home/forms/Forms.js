//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

// create a component
const Forms = () => {
  return (
    <View>
      <Text>Forms</Text>
      <Button
        onPress={() => Actions.modularDefaultForm()}
        title="Default Form"
        color="blue"
        accessibilityLabel="Go to default form scene" />
      <Button
        onPress={() => Actions.modularInitForm()}
        title="Init Form"
        color="blue"
        accessibilityLabel="Go to init form scene" />
      <Button
        onPress={() => Actions.modularValidateForm()}
        title="Validate Form"
        color="blue"
        accessibilityLabel="Go to validate form scene" />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
});

//make this component available to the app
export default Forms;
