import * as React from "react";
import { List, Datagrid, TextField, DateField, DeleteButton, EditButton } from 'react-admin';
import PostPagination from "../Pagination/PostPagination";

export const HotpotList = (props) => (
    <List {...props} title="List of hotpots" >
        <Datagrid>
            <TextField source="name" label="Name" />
            <TextField source="ingredients" label="Ingredients"/>
            <EditButton basePath="./hotpots"/>
            <DeleteButton undoable={false}/>
        </Datagrid>
    </List>
);