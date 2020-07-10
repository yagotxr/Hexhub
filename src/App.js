import React, { Component } from "react";
import RouterOutlet from './routings/Router'
import './App.scss'

class App extends Component {
  render(){
    return(
      <div className='App'>
        <RouterOutlet />
      </div>
    )
  }
}

export default App;