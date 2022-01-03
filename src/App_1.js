import React, {Component} from 'react';
import Customer from './components/Customer'
import './App.css';
import { render } from '@testing-library/react';

const customer ={
   'name': '지민',
   'birthday':'961222',
   'gender' : '남자',
   'job' : '댄스가수'
}
class App extends Component {
  render(){
  return (
   <Customer
    name={customer.name}
    birthday={customer.birthday}
    gender={customer.gender}
    job={customer.job}
   />
  );
  }
}

export default App;
