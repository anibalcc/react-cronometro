import React from 'react'
import Navigation from './Navigation'

class Main extends React.Component{
  render(){
    return(
      <div>
        <Navigation/>
        <div className="row">
          <div className="columns medium-6 large-4 small-centered">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default Main
