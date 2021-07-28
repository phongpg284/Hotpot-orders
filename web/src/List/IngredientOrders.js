import * as React from "react";
import { List, Datagrid, TextField, DateField, DeleteButton } from 'react-admin';

export const IngredientOrderList = (props) => (
    <List {...props} title="List of Ingredient Orders">
        <Datagrid>
            <TextField source="userId" label="User ID" />
            <TextField source="ingredient" label="Ingredient"/>
            <TextField source="quantity" label="Quantity"/>
            <DateField source="createdAt" label="Created At" showTime/>
            <DeleteButton undoable={false}/>
        </Datagrid>
    </List>
);