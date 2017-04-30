import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import { project } from './config';
import * as feature from './features'
import * as scene from './scenes'

export const Scenes = () => {
  return (
    <Scene key={project.name}>
      <Scene key="home" component={scene.Home} title="Home" initial />
      <Scene key="about" component={scene.About} title="About" />
    </Scene>
  )
}

const Routes = () => {
  return (
    <Router sceneStyle={{ marginTop: 70 }}>
      {Scenes()}
    </Router>
  )
}

export default Routes
