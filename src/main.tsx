import React from 'react'
import ReactDOM from 'react-dom'
import './css/base.css'
import './css/index.css'
import App from './App'

import store from './redux'

ReactDOM.render(
  <React.StrictMode>
    <App store={ store } />
  </React.StrictMode>,
  document.getElementById( 'root' )
)
