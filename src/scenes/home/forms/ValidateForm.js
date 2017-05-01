//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form'

import { TextField } from '../../../common';
import formValidation from './formValidation.js';

// create a component
class ValidateForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <View style={styles.container}>
        <Text>ValidateForm</Text>
        <View>
          <Field name="username" component={TextField} label="username" />
          <Field name="age" component={TextField} label="age" />
          <Button
            onPress={() => handleSubmit()}
            title="Submit"
            color="red" />
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }
  if (!values.age) {
    errors.age = 'Required'
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number'
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }
  return errors
}

ValidateForm = reduxForm({
  form: 'validate',
  validate: validate,
  onSubmit: (values, dispatch) => {
    alert('submit')
    //dispatch(createPost(values))
  }
})(ValidateForm)

//make this component available to the app
export default ValidateForm;
