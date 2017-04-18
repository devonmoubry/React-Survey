import React from 'react'


class Results extends React.Component {
  constructor(props) {
    super(props);
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
              <tr>
                <td>1</td>
                <td>What breed of dog was "Marley" in the film Marley & Me?</td>
                <td></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Which movie released in 2016 features Superman and Batman fighting?</td>
                <td></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Daniel Radcliffe became a global star in the film industry due to his performance in which film franchise?</td>
                <td></td>
              </tr>
              <tr>
                <td>4</td>
                <td>What name did Tom Hanks give to his volleyball companion in the film Cast Away?</td>
                <td></td>
              </tr>
              <tr>
                <td>5</td>
                <td>What is the highest grossing film of all time (without adjusting for inflation)?</td>
                <td></td>
              </tr>
              <tr>
                <td>6</td>
                <td>Which movie contains the quote, "Say hello to my little friend!"?</td>
                <td></td>
              </tr>
              <tr>
                <td>7</td>
                <td>Who directed the movies Pulp Fiction, Reservoir Dogs and Django Unchained?</td>
                <td></td>
              </tr>
              <tr>
                <td>8</td>
                <td>What was Dorothy’s surname in The Wizard Of Oz?</td>
                <td></td>
              </tr>
              <tr>
                <td>9</td>
                <td>This movie contains the quote, "Houston, we have a problem."</td>
                <td></td>
              </tr>
              <tr>
                <td>10</td>
                <td>Was Scarlett Johansson part of the cast for the 2016 movie Suicide Squad?</td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <button>Submit</button>
      </main>
    );
  }
}

export default Results
