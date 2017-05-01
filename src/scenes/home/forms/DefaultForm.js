//import liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { Field, reduxForm } from 'redux-form'

import { TextField } from '../../../common';

// create a component
class DefaultForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <View style={styles.container}>
        <Text>DefaultForm</Text>
        <View>
          <Field name="myField" component={TextField} />
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
})

DefaultForm = reduxForm({
  form: 'newPost',
  onSubmit: (values, dispatch) => {
    alert('submit')
    //dispatch(createPost(values))
  }
})(DefaultForm)

//make this component available to the app
export default DefaultForm;
