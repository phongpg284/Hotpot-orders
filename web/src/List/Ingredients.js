import * as React from "react";
import { List, Datagrid, TextField, DateField } from 'react-admin';

export const IngredientList = (props) => (
    <List {...props} title="List of ingredients">
        <Datagrid>
            <TextField source="name" label="Name" />
            <TextField source="quantity" label="Quantity"/>
            <DateField source="createdAt" label="Created At" showTime/>
        </Datagrid>
    </List>
);