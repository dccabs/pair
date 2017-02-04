import React, { Component, PropTypes } from 'react'
import Header from '../header'
import Menu from '../menu'

export default class AppShell extends Component {
  constructor (props) {
    super(props)
    this.state = {open: false};
  }

  toggleMenu () {
    this.setState({open: !this.state.open});
  }

  render () {
    //const { state, props } = this
    return (
      <div className="pair-app-shell">
        <Header toggleMenu={this.toggleMenu} />
        <Menu toggleMenu={this.toggleMenu} />
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
