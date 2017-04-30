import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import { project } from './config';
import * as feature from './features'
import * as scene from './scenes'

export const Scenes = (feature = project.name) => {
  return (
    <Scene key={feature}>
      <Scene key="modularHome" component={scene.Home} title="Home" initial />
      <Scene key="modularAbout" component={scene.About} title="About" />
    </Scene>
  )
}

const Routes = () => {
  return (
    <Router sceneStyle={{ marginTop: 70 }}>
      { Scenes(project.name) }
    </Router>
  )
}

export default Routes
