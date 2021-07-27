import logo from './logo.svg';
import './App.css';
import { Admin, Resource } from "react-admin"
import { OrderList } from './Orders';
import { useEffect, useState } from 'react';
import simpleRestProvider from 'ra-data-simple-rest';

import jsonServerProvider from 'ra-data-json-server';


function getAllOrders() {
  return fetch("/orders", {
    method: "GET",
    mode:"cors",
    headers: {
        "Content-Type": "application/json",
    },
    // body:  {
    //     "userToken": 7513,
    //     "tableID": 1,
    //     "guestQty": 9,
    //     "priceType": 100,
    //     "hotpotType": "lau chua cay"
    // }
  }).then(res => res.json())
  // .then(data => {
  //   setOrders(data)
  // console.log(data)
  // })
}


function App() {
  const [orders, setOrders] = useState([])
  

  // useEffect(() => {
  //   getAllOrders()
  //   .then(orders => setOrders(orders))
  // },[])

  return (
    // <div>heh</div>
    <Admin dataProvider={simpleRestProvider("http://localhost:5000/api")}>
        <Resource name="orders" list={OrderList} />
    </Admin>
  )
}

export default App;
