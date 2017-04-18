import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import questions from './questions.js'
import container from '../containers/all.js'

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.getQuestionRows = this.getQuestionRows.bind(this);
  }

  getQuestionRows(answers) {
    const rows = questions.map(function(question) {
      return (
        <tr key={question.id}>
          <td>{question.id}</td>
          <td>{question.question}</td>
          <td>{answers[question.id-1]}</td>
        </tr>
      );
    });

    return rows;
  }

  render () {
    return (
      <main>
          <h1>Results</h1>
          <table>
            <thead>
              <tr>
                <td>Number</td>
                <td>Question</td>
                <td>Your Answer</td>
              </tr>
            </thead>
            <tbody>
              { this.getQuestionRows(this.props.answers) }
            </tbody>
          </table>
          <button>Submit</button>
      </main>
    );
  }
}

export default connect(container.allState)(Results)
