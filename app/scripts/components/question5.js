import React from 'react'
import { Link } from 'react-router-dom'

class Question5 extends React.Component {
  render (data) {
    return (
      <main>
          <h1>Question 5</h1>
          <p>What is the highest grossing film of all time (without adjusting for inflation)?</p>
          <Link to="/question4">Previous Question</Link>
          <input type="text" />
          <Link to="/question6">Next Question</Link>
      </main>
    );
  }
}

export default Question5
