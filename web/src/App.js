import './App.css';
import { Admin, Resource } from "react-admin"
import { OrderList } from './List/Orders';
import { IngredientOrderList } from './List/IngredientOrders';
import { IngredientList } from './List/Ingredients';
import { HotpotList } from './List/Hotpots';
import { OrderCreate, OrderEdit } from './Edit/Order';
import DataProvider from './DataProvider';
import { IngredientCreate, IngredientEdit } from './Edit/Ingredient';
import { IngredientOrderCreate, IngredientOrderEdit } from './Edit/IngredientOrder';
import { HotpotCreate, HotpotEdit } from './Edit/Hotpot';

function App() {
  return (
    <Admin dataProvider={DataProvider}>
        <Resource name="orders" list={OrderList} create={OrderCreate} edit={OrderEdit} />
        <Resource name="ingredientOrders" list={IngredientOrderList} create={IngredientOrderCreate} edit={IngredientOrderEdit} />
        <Resource name="ingredients" list={IngredientList} create={IngredientCreate} edit={IngredientEdit} />
        <Resource name="hotpots" list={HotpotList} create={HotpotCreate} edit={HotpotEdit} />
    </Admin>
  )
}

export default App;
