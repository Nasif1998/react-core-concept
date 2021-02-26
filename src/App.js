import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks=['Salman', 'Anowar'];
  const products=[
    {name: 'Photoshop', price:'$90.99'},
    {name: 'Illastrator', price: '$60.99'}
  ]
  //const productNames = products.map(product => product.name);
  return (
    <div className="App">
      <header className="App-header">
        <p>Iam a react person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        <Product name={products[0].name} price={products[0].price}></Product>
        <Person name="Rubel Nayok" nayika="Moushumi"></Person>
        <Person name ={nayoks[0]} nayika="Shabnur"></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount]= useState(0);
  const handleIncrease = () => {
    const newCount = count +1;
    setCount(newCount);
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={ () => setCount(count-1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h3>Dynamic users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props) {
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  return (
    <div style ={productStyle}>
      <h3>{props.name}</h3>
      <h5>{props.price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props) {
  const personStyle={
    border: '2px solid red',
    margin: '10px'
  }
  return (
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <h3>Hero of {props.nayika}</h3>
    </div>
  )
}

export default App;
