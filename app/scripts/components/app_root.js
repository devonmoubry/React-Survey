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
      <NavLink to="/question">Question 2</NavLink>
      <br />
      <NavLink to="/question">Question 3</NavLink>
      <br />
      <NavLink to="/question">Question 4</NavLink>
      <br />
      <NavLink to="/question">Question 5</NavLink>
      <br />
      <NavLink to="/question">Question 6</NavLink>
      <br />
      <NavLink to="/question">Question 7</NavLink>
      <br />
      <NavLink to="/question">Question 8</NavLink>
      <br />
      <NavLink to="/question">Question 9</NavLink>
      <br />
      <NavLink to="/question">Question 10</NavLink>
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
