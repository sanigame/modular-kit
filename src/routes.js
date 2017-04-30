import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import { project } from './config';
import * as feature from './features'
import * as scene from './scenes'

export const Scenes = [
  { key: 'modularHome', component: 'scene.Home', title: '', options: {} },
  { key: 'modularAbout', component: 'scene.About', title: '', options: {} },
]

const renderScenes = (sceneArr = []) => {
  return sceneArr.map((scene, index) => {
    return(<Scene key={scene.key} component={About} title={scene.title}/>)
  })
}

const Routes = () => {
  return (
    <Router sceneStyle={{ marginTop: 70 }}>
      {renderScenes(Scenes)}
    </Router>
  )
}

export default Routes
