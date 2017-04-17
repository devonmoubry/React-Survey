import React from 'react'
import { connect } from 'react-redux'
import { Route, Link, NavLink } from 'react-router-dom'
import container from '../containers/all.js'


const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <br />
      <NavLink to="/start">Start</NavLink>
      <br />
      <NavLink to="/results">Results</NavLink>
      <br />
      <NavLink to="/question1">Question 1</NavLink>
      <br />
      <NavLink to="/question2">Question 2</NavLink>
      <br />
      <NavLink to="/question3">Question 3</NavLink>
      <br />
      <NavLink to="/question4">Question 4</NavLink>
      <br />
      <NavLink to="/question5">Question 5</NavLink>
      <br />
      <NavLink to="/question6">Question 6</NavLink>
      <br />
      <NavLink to="/question7">Question 7</NavLink>
      <br />
      <NavLink to="/question8">Question 8</NavLink>
      <br />
      <NavLink to="/question9">Question 9</NavLink>
      <br />
      <NavLink to="/question10">Question 10</NavLink>
    </nav>
  )
}

class AppRoot extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <main>
        <NavBar/>
        <section>
        </section>
      </main>
    );
  }
}

export default connect(container.allState)(AppRoot)
