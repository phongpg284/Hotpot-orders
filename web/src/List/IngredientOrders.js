import * as React from "react";
import { List, Datagrid, TextField, DateField, DeleteButton, EditButton } from 'react-admin';
import PostPagination from "../Pagination/PostPagination";

export const IngredientOrderList = (props) => (
    <List {...props} title="List of Ingredient Orders">
        <Datagrid>
            {/* <TextField source="userId" label="User ID" /> */}
            <TextField source="tableId" label="Table ID" />
            <TextField source="ingredient" label="Ingredient"/>
            <TextField source="quantity" label="Quantity"/>
            <DateField source="createdAt" label="Created At" showTime/>
            <EditButton basePath="./ingredientOrders"/>
            <DeleteButton undoable={false}/>
        </Datagrid>
    </List>
);