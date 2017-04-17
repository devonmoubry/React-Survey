import React from 'react'
import { Link } from 'react-router-dom'

class Question8 extends React.Component {
  render (data) {
    return (
      <main>
          <h1>Question 8</h1>
          <p>What was Dorothy’s surname in "The Wizard Of Oz"?</p>
          <Link to="/question7">Previous Question</Link>
          <input type="text" />
          <Link to="/question9">Next Question</Link>
      </main>
    );
  }
}

export default Question8
