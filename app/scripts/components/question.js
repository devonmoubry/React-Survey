import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import questions from './questions.js'

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.handleQuestion = this.handleQuestion.bind(this);
  }

  handleQuestion () {
    console.log('question handled');
  }

  render (data) {
    const questionId = parseInt(this.props.match.params.id);
    const question = questions[questionId - 1];
    let leftButton = <Link className="left" to={`/question/${question.id - 1}`}>Previous Question</Link>;
    let rightButton = <Link className="right" onClick={this.handleQuestion} to={`/question/${question.id + 1}`}>Next Question</Link>;

    if (questionId === 10) {
      console.log('horr');
      rightButton = <Link className="right" onClick={this.handleQuestion} to="/results">Results</Link>
    }

    if (questionId === 1) {
      leftButton = null;
    }

    return (
      <main>
          <h1>Question {question.id}</h1>
          <p>
          {question.question}
          </p>
          {leftButton}
          <input type="text" />
          {rightButton}
      </main>
    );
  }
}

export default connect()(Question)
