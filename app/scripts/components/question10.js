import React from 'react'
import { Link } from 'react-router-dom'

class Question10 extends React.Component {
  render (data) {
    return (
      <main>
          <h1>Question 10</h1>
          <p>Was Scarlett Johansson part of the cast for the 2016 movie "Suicide Squad"?</p>
          <Link to="/question9">Previous Question</Link>
          <input type="text" />
          <Link onClick="handleResults" to="/results">Results</Link>
      </main>
    );
  }
}

export default Question10
