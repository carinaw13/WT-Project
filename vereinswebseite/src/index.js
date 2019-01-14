import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, withRouter } from "react-router-dom"

import './index.css'

import App from './App'

const UserApp = withRouter(App)

ReactDOM.render(
    <Router>
        <UserApp />
    </Router>,
    document.getElementById('root'))
