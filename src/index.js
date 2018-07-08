import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

// router
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Login from './views/login'
import Main from './views/main'

// redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import m3app from './reducers'
const store = createStore(m3app)
store.subscribe(() => {
  console.log(store.getState())
})

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <div>
        <Route exact path="/" component={ Login } />
        <Route path="/main" component={ Main } />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
