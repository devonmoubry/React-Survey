import store from './store.js'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import AppRoot from './components/app_root.js'
import Start from './components/start.js'
import Results from './components/results.js'
import Question from './components/question.js'
import Question1 from './components/question1.js'

export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/"         component={AppRoot}/>
          <Route path="/start"    component={Start} />
          <Route path="/question1" component={Question1} />
          <Route path="/question2" component={Question} />
          <Route path="/question3" component={Question} />
          <Route path="/question4" component={Question} />
          <Route path="/question5" component={Question} />
          <Route path="/question6" component={Question} />
          <Route path="/question7" component={Question} />
          <Route path="/question8" component={Question} />
          <Route path="/question9" component={Question} />
          <Route path="/question10" component={Question} />
          {/*<Route path="/question/:id" component={Question} />*/}
          <Route path="/results"  component={Results} />
        </div>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
}
