import './App.css';
import { Admin, Resource } from "react-admin"
import { OrderList } from './List/Orders';
import { IngredientOrderList } from './List/IngredientOrders';
import { IngredientList } from './List/Ingredients';
import { HotpotList } from './List/Hotpots';
import { OrderEdit } from './Edit/Order';
import DataProvider from './DataProvider';

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
  
  // console.log(dataProvider.delete)

  return (
    // <div>heh</div>
    <Admin dataProvider={DataProvider}>
        <Resource name="orders" list={OrderList} edit={OrderEdit}/>
        <Resource name="ingredientOrder" list={IngredientOrderList} />
        <Resource name="ingredients" list={IngredientList} />
        <Resource name="hotpots" list={HotpotList} />
    </Admin>
  )
}

export default App;
