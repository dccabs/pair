import React, { Component, PropTypes } from 'react'
import Header from '../header'
import Menu from '../menu'

export default class AppShell extends Component {
  constructor (props) {
    super(props)
    this.state = {menuOpen: false};
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu () {
    this.setState({menuOpen: !this.state.menuOpen});
  }

  render () {
    const { state } = this

    return (
      <div className="pair-app-shell">
        <Header { ...state } toggleMenu={this.toggleMenu} />
        <Menu { ...state } toggleMenu={this.toggleMenu} />
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
