import store from './store.js'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import AppRoot from './components/app_root.js'
import Start from './components/start.js'
import Results from './components/results.js'
import Question from './components/question.js'

export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/"         component={AppRoot}/>
          <Route path="/start"    component={Start} />
          <Route path="/question/:id" component={Question} />
          <Route path="/results"  component={Results} />
        </div>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
}
