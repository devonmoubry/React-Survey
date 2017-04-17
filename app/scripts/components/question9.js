import React from 'react'
import { Link } from 'react-router-dom'

class Question9 extends React.Component {
  render (data) {
    return (
      <main>
          <h1>Question 9</h1>
          <p>This movie contains the quote, "Houston, we have a problem."</p>
          <Link to="/question8">Previous Question</Link>
          <input type="text" />
          <Link to="/question10">Next Question</Link>
      </main>
    );
  }
}

export default Question9
