import React, { Component } from 'react';
import {Avatar} from './Avatar.js'
import Devicons from './DevIcons.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Hafþór's react app</h2>
        </div>
        <Devicons/>
        <Avatar name="hftor"/>
      </div>
    );
  }
}

export default App;
