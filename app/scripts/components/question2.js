import React from 'react'
import { Link } from 'react-router-dom'

class Question2 extends React.Component {
  render (data) {
    return (
      <main>
          <h1>Question 2</h1>
          <p>Which movie released in 2016 features Superman and Batman fighting?</p>
          <Link to="/question1">Previous Question</Link>
          <input type="text" />
          <Link to="/question3">Next Question</Link>
      </main>
    );
  }
}

export default Question2
