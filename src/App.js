import React, { Component } from 'react';
// COMPONENTS
import Header from './Header.js';
import Sidebar from './Sidebar.js';

// EXTRAS
import './App.css';

class App extends Component {
  render() {
    return  (
      <div>
        <Header/>
        <Sidebar />
      </div>
    );
  }
}

export default App;
