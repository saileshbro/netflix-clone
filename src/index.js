import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import App from './app'
import GlobalStyle from './global_styles'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
