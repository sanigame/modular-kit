//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'

import { TextField } from '../../../common';

// create a component
class InitForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <View style={styles.container}>
        <Text>InitForm</Text>
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
});

InitForm = reduxForm({
  form: 'editPost'
})(InitForm)

const mapStateToProps = (state, ownProps) => {
  return {
    initialValues: {
      myField: 'test test test'
    }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (values) => {
      alert('submit')
      //dispatch(editPost(values, ownProps.params.id))
    }
  }
}

//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(InitForm);
