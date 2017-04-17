import React from 'react'
import { Link } from 'react-router-dom'

class Question4 extends React.Component {
  render (data) {
    return (
      <main>
          <h1>Question 4</h1>
          <p>What name did Tom Hanks give to his volleyball companion in the film 'Cast Away'?</p>
          <Link to="/question3">Previous Question</Link>
          <input type="text" />
          <Link to="/question5">Next Question</Link>
      </main>
    );
  }
}

export default Question4
