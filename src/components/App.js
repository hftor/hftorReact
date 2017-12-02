import React, { Component } from 'react';
import {Avatar} from './Avatar.js'
import {DevIcons} from './DevIcons.js';
require('../css/main.scss');

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className="some-cool-name">Welcome to Hafþór's react app</h2>
        </div>
        <DevIcons icon="react"/>
        <Avatar name="hftor"/>
      </div>
    );
  }
}

export default App;
