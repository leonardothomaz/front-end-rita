import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Intro } from '../components/Intro'
import Cadastro from '../components/Cadastro'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Intro} />
      <Route path="/Cadastro" component={Cadastro} />
    </Switch>
  )
}
