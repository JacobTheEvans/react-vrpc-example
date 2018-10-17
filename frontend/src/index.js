import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'
import App from './App'
import * as serviceWorker from './serviceWorker'

injectGlobal`
  * {
    box-sizing: border-box;
    font-family: Helvetica;
  }
`

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.register()
