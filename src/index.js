import React from 'react';
import { render } from 'react-dom'
import router from './router'
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import App from './App'

render(
  <App>
    {router}
  </App>,
  document.querySelector('#root')
)
