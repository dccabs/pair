import React, { Component, PropTypes } from 'react'
import Header from '../header'
import Menu from '../menu'

export default class AppShell extends Component {
  constructor (props) {
    super(props)
    this.state = {menuOpen: false, numbers: ''};
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu () {
    this.setState({menuOpen: !this.state.menuOpen});
  }

  onUpdateNumbers () {
    console.log('onUpdateNumberss')
  }

  render () {
    const { state } = this

    return (
      <div className="pair-app-shell">
        <Menu { ...state } toggleMenu={this.toggleMenu} />
        <main role="main">
          <Header { ...state } toggleMenu={this.toggleMenu} />
          {this.props.children}
        </main>
      </div>
    )
  }
}

AppShell.propTypes = {
  children: PropTypes.node
}
