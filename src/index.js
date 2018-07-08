import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Login from './views/login'
import NotFound from './views/404'
import Course from './views/course'
import User from './views/user'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={ Login }/>
      <Route path="/404" component={ NotFound }/>
      <Route path="/course" component={ Course }/>
      <Route path="/user" component={ User }/>
    </div>
  </Router>,
  document.getElementById('root')
)

registerServiceWorker()
