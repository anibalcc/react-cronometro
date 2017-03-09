import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'

import Main from './components/Main'
import Timer from './components/Timer'
import Countdown from './components/Countdown'

import styles from './styles/app.scss'

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="Countdown" component = {Countdown}/>
        <IndexRoute component={Timer}/>
      </Route>
    </Router>,
    document.getElementById('app')
)
