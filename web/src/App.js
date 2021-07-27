import './App.css';
import { Admin, Resource } from "react-admin"
import { OrderList } from './List/Orders';
import { IngredientOrderList } from './List/IngredientOrders';
import { IngredientList } from './List/Ingredients';
import { HotpotList } from './List/Hotpots';
import { useEffect, useState } from 'react';
import simpleRestProvider from 'ra-data-simple-rest';



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
        <Resource name="ingredientOrder" list={IngredientOrderList} />
        <Resource name="ingredients" list={IngredientList} />
        <Resource name="hotpots" list={HotpotList} />
    </Admin>
  )
}

export default App;
