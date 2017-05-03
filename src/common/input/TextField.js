//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// create a component
const TextField = ({ input, label, type, meta: { touched, error, warning } }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        {...input} 
        placeholder={label}
        style={{height: 40}} />
      {touched && ((error && <Text style={{color: 'red'}}>{error}</Text>) || (warning && <Text style={{color: 'red'}}>{warning}</Text>))}
    </View>
  );
};

//make this component available to the app
export default TextField ;
