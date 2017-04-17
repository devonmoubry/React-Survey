import React from 'react'
import { Link } from 'react-router-dom'

class Question6 extends React.Component {
  render (data) {
    return (
      <main>
          <h1>Question 6</h1>
          <p>Which movie contains the quote, "Say hello to my little friend!"?</p>
          <Link to="/question5">Previous Question</Link>
          <input type="text" />
          <Link to="/question7">Next Question</Link>
      </main>
    );
  }
}

export default Question6
