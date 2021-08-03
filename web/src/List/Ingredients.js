import * as React from "react";
import { List, Datagrid, TextField, DateField, DeleteButton } from 'react-admin';
import PostPagination from "../Pagination/PostPagination";

export const IngredientList = (props) => (
    <List {...props} title="List of ingredients" >
        <Datagrid>
            <TextField source="name" label="Name" />
            <TextField source="quantity" label="Quantity"/>
            <DeleteButton undoable={false}/>
        </Datagrid>
    </List>
);