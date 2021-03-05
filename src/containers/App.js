import './App.css';
import React from 'react';
import {BrowserRouter} from 'react-router-dom'

import Layout from '../hoc/Layout/Layout';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Layout />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
