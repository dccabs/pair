import React, { Component, PropTypes } from 'react'
import AppBar from 'material-ui/AppBar';
import Header from '../header'
import Menu from '../menu'

export default class AppShell extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { state, props } = this
    return (
      <div className="pair-app-shell">
        <Header />
        <Menu />
        <main role="main">
          {this.props.children}
        </main>

        <footer>footer</footer>

      </div>
    )
  }
}

AppShell.propTypes = {
  children: PropTypes.node
}
