import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './fonts/SFUIDisplay/SFUIDisplay-Bold.ttf'
import './fonts/SFUIDisplay/SFUIDisplay-Light.ttf'
import './fonts/SFUIDisplay/SFUIDisplay-Medium.ttf'
import './fonts/SFUIDisplay/SFUIDisplay-Regular.ttf'
import './index.css'
import './css/markdown.css'

import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
