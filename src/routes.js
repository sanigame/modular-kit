import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import { project } from './config';
import * as scene from './scenes'

export const Scenes = [
  { key: 'modularAbout', component: 'About', type: 'scene', title: 'm About', options: {} },
]

const renderScenes = (sceneArr = []) => {
  return sceneArr.map((value, index) => {
    return(<Scene key={value.key} component={scene[value.component]} title={value.title}/>)
  })
}

const Routes = () => {
  return (
    <Router sceneStyle={{ marginTop: 70 }}>
      <Scene key="modularHome" component={scene.Home} title="m Home" initial />
      {renderScenes(Scenes)}
    </Router>
  )
}

export default Routes
