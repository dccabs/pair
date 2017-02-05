import React from 'react'
import { Route, IndexRoute, Router, hashHistory } from 'react-router'
import Home from './application/home'

// Scroll to top on new route
function handleUpdate () {
  if (this.state.location.action === 'POP') {
    window.scrollTo(0, 0)
  }
}

export default (
  <Router history={hashHistory} onUpdate={handleUpdate}>
    <Route path="/">
      <IndexRoute component={Home} />
    </Route>
  </Router>
)
