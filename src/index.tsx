import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/fonts/SF-Pro-Text-Thin.otf'
import './assets/fonts/SF-Pro-Text-Light.otf'
import './assets/fonts/SF-Pro-Text-Regular.otf'
import './assets/fonts/SF-Pro-Text-Medium.otf'
import './assets/fonts/SF-Pro-Text-Semibold.otf'
import './assets/fonts/SF-Pro-Text-Bold.otf'
import './assets/fonts/SF-Pro-Text-Heavy.otf'
import './assets/fonts/SF-Pro-Text-Black.otf'

import Routes from './routes'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
