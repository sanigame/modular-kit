import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import { project } from './config';
import * as scene from './scenes'

export const Scenes = [
  { key: 'modularAbout', component: 'About', title: 'm About', options: {} },
  { key: 'modularForm', component: 'Form', title: 'm Form', options: {} },
  { key: 'modularDefaultForm', component: 'DefaultFrom', title: 'm DefaultForm', options: {} },
  { key: 'modularInitForm', component: 'InitFrom', title: 'm InitForm', options: {} },
  { key: 'modularValidateForm', component: 'ValidateFrom', title: 'm ValidateForm', options: {} },
]

const renderScenes = (sceneArr = [], module) => {
  return sceneArr.map((value, index) => {
    return(<Scene key={value.key} component={module[value.component]} title={value.title}/>)
  })
}

const Routes = () => {
  return (
    <Router sceneStyle={{ marginTop: 70 }}>
      <Scene key="modularHome" component={scene.Home} title="m Home" initial />
      {renderScenes(Scenes, scene)}
    </Router>
  )
}

export default Routes
