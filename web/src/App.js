import './App.css';
import { Admin, Resource } from "react-admin"
import DataProvider from './DataProvider';

import { OrderList } from './List/Orders';
import { IngredientOrderList } from './List/IngredientOrders';
import { IngredientList } from './List/Ingredients';
import { HotpotList } from './List/Hotpots';
import { MenuList } from './List/Menus';
import { RestaurentList } from './List/Restaurents';

import { OrderCreate, OrderEdit } from './Edit/Order';
import { IngredientCreate, IngredientEdit } from './Edit/Ingredient';
import { IngredientOrderCreate, IngredientOrderEdit } from './Edit/IngredientOrder';
import { HotpotCreate, HotpotEdit } from './Edit/Hotpot';
import { MenuCreate, MenuEdit } from './Edit/Menus';
import { RestaurentCreate, RestaurentEdit } from './Edit/Restaurents';

function App() {
  return (
    <Admin dataProvider={DataProvider}>
        <Resource name="orders" list={OrderList} create={OrderCreate} edit={OrderEdit} />
        <Resource name="ingredientOrders" list={IngredientOrderList} create={IngredientOrderCreate} edit={IngredientOrderEdit} />
        <Resource name="ingredients" list={IngredientList} create={IngredientCreate} edit={IngredientEdit} />
        <Resource name="hotpots" list={HotpotList} create={HotpotCreate} edit={HotpotEdit} />
        <Resource name="menus" list={MenuList} create={MenuCreate} edit={MenuEdit} />
        <Resource name="restaurents" list={RestaurentList} create={RestaurentCreate} edit={RestaurentEdit} />
    </Admin>
  )
}

export default App;
