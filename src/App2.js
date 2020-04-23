import React, { Component } from 'react';
import Navbar from './components/navigation/Navbar';
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      
    );
  }
}

export default App;
