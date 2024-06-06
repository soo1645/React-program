import React, { Component } from 'react';
import Customer from './componemts/customer';
import './App.css';

const customer = [
  {
    'id': 1,
    'name': '이수현',
    'birthday': '020111',
    'gender': '여'
  },
  {
    'id': 2,
    'name': '홍길동',
    'birthday': '011222',
    'gender': '남'
  }

]

class App extends Component{
  render(){
    return(
      <div>
        {/* <Customer
          id={customer[0].id}
          name={customer[0].name}
          birthday={customer[0].birthday}
          gender={customer[0].gender}
        />
        <Customer
            id={customer[1].id}
            name={customer[1].name}
            birthday={customer[1].birthday}
            gender={customer[1].gender}
        /> */}
        {
          customer.map(c => {
            return(
              <Customer
                key={c.id}
                id={c.id}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
