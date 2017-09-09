import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import CreatePage from './components/CreatePage'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/create' component={CreatePage} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root')
)
registerServiceWorker()
