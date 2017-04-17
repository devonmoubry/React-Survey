import React from 'react'
import { Link } from 'react-router-dom'

class Question7 extends React.Component {
  render (data) {
    return (
      <main>
          <h1>Question 7</h1>
          <p>Who directed the movies "Pulp Fiction", "Reservoir Dogs" and "Django Unchained"?</p>
          <Link to="/question6">Previous Question</Link>
          <input type="text" />
          <Link to="/question8">Next Question</Link>
      </main>
    );
  }
}

export default Question7
