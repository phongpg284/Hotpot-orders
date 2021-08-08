import * as React from "react";
import { List, Datagrid, TextField, DateField, DeleteButton, EditButton, ImageField } from 'react-admin';
import PostPagination from "../Pagination/PostPagination";
import logo from "../assets/139k.jpg"

export const HotpotList = (props) => (
    <List {...props} title="List of hotpots" >
        <Datagrid>
            <TextField source="name" label="Name" />
            <ImageField source="imgUrl" label="Pic"/>
            <TextField source="ingredients" label="Ingredients"/>
            <EditButton basePath="./hotpots"/>
            <DeleteButton undoable={false}/>
        </Datagrid>
    </List>
);