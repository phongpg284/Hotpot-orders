import * as React from "react";
import { List, Datagrid, TextField, DateField, DeleteButton, EditButton, ImageField } from 'react-admin';
import PostPagination from "../Pagination/PostPagination";

export const IngredientList = (props) => (
    <List {...props} title="List of ingredients" >
        <Datagrid>
            <ImageField source="imgUrl" label="Pic"/>
            <TextField source="name" label="Name" />
            <TextField source="quantity" label="Quantity"/>
            <EditButton basePath="./ingredients"/>
            <DeleteButton undoable={false}/>
        </Datagrid>
    </List>
);