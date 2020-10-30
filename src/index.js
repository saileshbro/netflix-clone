import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import App from './app'
import GlobalStyle from './global_styles'
import firebase from './lib/firebase.prod'
import FirebaseContext from './context/firebase'

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyle />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
