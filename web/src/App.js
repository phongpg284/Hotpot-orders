import './App.css';
import { Admin, Resource } from "react-admin"
import { OrderList } from './List/Orders';
import { IngredientOrderList } from './List/IngredientOrders';
import { IngredientList } from './List/Ingredients';
import { HotpotList } from './List/Hotpots';
import { OrderEdit } from './Edit/Order';
import DataProvider from './DataProvider';

function App() {
  return (
    <Admin dataProvider={DataProvider}>
        <Resource name="orders" list={OrderList} edit={OrderEdit} />
        <Resource name="ingredientOrders" list={IngredientOrderList} />
        <Resource name="ingredients" list={IngredientList} />
        <Resource name="hotpots" list={HotpotList} />
    </Admin>
  )
}

export default App;
