import React from 'react'
import ReactDOM from 'react-dom'
import './css/base.css'
import './css/index.css'
import App from './App'

import { Provider } from 'react-redux'

import store from './redux'

export const Store = store

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById( 'root' )
)
