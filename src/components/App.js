import React, { Component } from 'react';
import {Avatar} from './Avatar.js'
import {DevIcons} from './DevIcons.js';
import {ListOfRepos} from './ListOfRepos.js'
require('../css/main.scss');

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Hafþór's react app</h2>
        </div>
        <DevIcons icon="react"/>
        <Avatar name="hftor"/>
        <ListOfRepos name="hftor"/>
      </div>
    );
  }
}

export default App;
