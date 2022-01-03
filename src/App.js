import React, {Component} from 'react';
import Customer from './components/Customer'
import './App.css';
import { render } from '@testing-library/react';

const customers =[
  {
    'id':1,
    'image' :'https://placeimg.com/128/128/1',
     'name': '지민',
     'birthday':'961222',
     'gender' : '남자',
     'job' : '댄스가수'
  },
  {
    'id':2,
    'image' :'https://placeimg.com/128/128/2',
     'name': '뷔',
     'birthday':'961225',
     'gender' : '남자',
     'job' : '댄스가수'
  },
  {
  'id':3,
  'image' :'https://placeimg.com/128/128/3',
   'name': '정국',
   'birthday':'960503',
   'gender' : '남자',
   'job' : '댄스가수'
}
]
class App extends Component {
  render(){
  return (
    <div>
      {
       customers.map(c=> { return(<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/> ); }) }
    </div>
  );
  }
}
export default App;

