//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FeedItem from './FeedItem'

// create a component
class FeedList extends Component {
  render() {
    const { isFetching, error, value } = this.props.postArr
    return (
      <View>
        { isFetching ? <Text>loading</Text> : null }
        { error ? <Text>{error}</Text> : null }
        { 
          value ?
          value.map((data, index) => {
            return(<FeedItem key={data.id} title={data.title} />)
          }) :
          null
        }
      </View>
    );
  }
}

//make this component available to the app
export default FeedList;
