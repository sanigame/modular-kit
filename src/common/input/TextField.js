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
      <Text style={{color: 'red'}}>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </Text>
    </View>
  );
};

//make this component available to the app
export default TextField ;
