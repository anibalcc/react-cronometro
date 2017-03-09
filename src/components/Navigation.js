import React from 'react';
import {Link, IndexLink} from 'react-router'

class Navigation extends React.Component{
  render(){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React Timer App
            </li>
            <li>
              <IndexLink to="/" activeClassName="activate-link">Timer</IndexLink>
            </li>
            <li>
              <Link to="/" activeClassName="activate-link">Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Create by  <a href="#" target="_black">Anibal</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Navigation
