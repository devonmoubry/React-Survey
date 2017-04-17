import React from 'react'
import { Link } from 'react-router-dom'

class Question1 extends React.Component {
  render (data) {
    return (
      <main>
          <h1>Question 1</h1>
          <p>What breed of dog was "Marley" in the film "Marley & Me"?</p>
          <input type="text" />
          <Link to="/question2">Next Question</Link>
      </main>
    );
  }
}

export default Question1
