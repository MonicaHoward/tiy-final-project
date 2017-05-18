import React, { Component } from 'react';
// COMPONENTS
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import LeftQuery from './LeftQuery.js'
import Footer from './Footer.js';

// EXTRAS
import './App.css';

class App extends Component {
  render() {
    return  (
      <div>
        <Header/>
        <Sidebar />
        <LeftQuery />
        <Footer />
      </div>
    );
  }
}

export default App;
