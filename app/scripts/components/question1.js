import React from 'react'

class Question1 extends React.Component {
  render (data) {
    return (
      <main>
          <h1>Question 1</h1>
          <p>What breed of dog was "Marley" in the film "Marley & Me"?</p>
          <input type="text" />
          <button>Next Question</button>
      </main>
    );
  }
}

export default Question1
