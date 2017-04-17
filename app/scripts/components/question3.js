import React from 'react'
import { Link } from 'react-router-dom'

class Question3 extends React.Component {
  render (data) {
    return (
      <main>
          <h1>Question 3</h1>
          <p>Daniel Radcliffe became a global star in the film industry due to his performance in which film franchise?</p>
          <Link to="/question2">Previous Question</Link>
          <input type="text" />
          <Link to="/question4">Next Question</Link>
      </main>
    );
  }
}

export default Question3
