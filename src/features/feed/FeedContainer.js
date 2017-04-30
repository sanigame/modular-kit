//import liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { connect } from 'react-redux';

import { project } from '../../config';
import { fetchPostsIfNeeded } from './FeedAction';
import FeedList from './FeedList';

// create a component
class FeedContainer extends Component {

  componentDidMount() {
    this.props.fetchPost()
  }

  render() {
    return (
      <ScrollView>
        <FeedList postArr={this.props.feed} />
      </ScrollView>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    feed: state[project.name].feed
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPost: () => {
      dispatch(fetchPostsIfNeeded())
    }
  }
}

//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer)
