import React, {Component } from 'react';
import Customer from './components/Customer'
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

const customers = [
  {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '홍길동1',
  'birthday' : '961222',
  'gender':'남자',
  'job':'프로그래머'
},
  {
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '홍길동2',
  'birthday' : '921222',
  'gender':'남자',
  'job':'webdesigner'
},
  {
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '홍길동3',
  'birthday' : '951222',
  'gender':'남자',
  'job':'군인'
}
]
class App extends Component{
  render(){
    return(
      <div>
        {
          customers.map(c => {
            return(
              <Customer
              key = {c.id}
              id = {c.id}
              name = {c.name}
              image = {c.image}
              gender = {c.gender}
              birthday = {c.birthday}
              job = {c.job}
              />
            )
          })
        }
      </div>
    )        
  }
  
}

export default App;
