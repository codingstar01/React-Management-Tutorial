import React, {Component} from 'react';
import Customer from './components/Customer'
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  render(){
  return (
   <Customer/>
  );
  }
}

export default App;
