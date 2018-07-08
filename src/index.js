import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Login from './views/login'
import Main from './views/main'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={ Login } />
      <Route path="/main" component={ Main } />
    </div>
  </Router>,
  document.getElementById('root')
)

registerServiceWorker()
