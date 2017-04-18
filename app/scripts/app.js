import store from './store.js'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import AppRoot from './components/app_root.js'
import Start from './components/start.js'
import Results from './components/results.js'
import Question from './components/question.js'
/*import Question1 from './components/question1.js'
import Question2 from './components/question2.js'
import Question3 from './components/question3.js'
import Question4 from './components/question4.js'
import Question5 from './components/question5.js'
import Question6 from './components/question6.js'
import Question7 from './components/question7.js'
import Question8 from './components/question8.js'
import Question9 from './components/question9.js'
import Question10 from './components/question10.js'*/

export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div>
          <Route path="/"         component={AppRoot}/>
          <Route path="/start"    component={Start} />
          <Route path="/question/:id" component={Question} />
          {/*<Route path="/question1" component={Question1} />
          <Route path="/question2" component={Question2} />
          <Route path="/question3" component={Question3} />
          <Route path="/question4" component={Question4} />
          <Route path="/question5" component={Question5} />
          <Route path="/question6" component={Question6} />
          <Route path="/question7" component={Question7} />
          <Route path="/question8" component={Question8} />
          <Route path="/question9" component={Question9} />
          <Route path="/question10" component={Question10} />
          <Route path="/question/:id" component={Question} />*/}
          <Route path="/results"  component={Results} />
        </div>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
}
