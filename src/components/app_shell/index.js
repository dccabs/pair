import React, { Component, PropTypes } from 'react'

export default class AppShell extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { state, props } = this
    return (
      <div className="pair-app-shell">
        <header>header</header>
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
