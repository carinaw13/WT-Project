import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, withRouter } from "react-router-dom"

import './index.css'

import App from './App'

const YoloApp = withRouter(App)

ReactDOM.render(
    <Router>
        <YoloApp />
    </Router>,
    document.getElementById('root'))
