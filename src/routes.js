import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'

import * as feature from './features'
import * as scene from './scenes'

const Routes = () => {
  return (
    <Router sceneStyle={{ marginTop: 70 }}>
      <Scene key="home" component={ scene.Home } title="Home" initial />
      <Scene key="about" component={ scene.About } title="About" />
    </Router>
  )
}

export default Routes
