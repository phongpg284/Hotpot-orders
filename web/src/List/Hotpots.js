import * as React from "react";
import { List, Datagrid, TextField, DateField, DeleteButton } from 'react-admin';
import PostPagination from "../Pagination/PostPagination";

export const HotpotList = (props) => (
    <List {...props} title="List of hotpots" >
        <Datagrid>
            <TextField source="name" label="Name" />
            <TextField source="ingredients" label="Ingredients"/>
            <DeleteButton undoable={false}/>
        </Datagrid>
    </List>
);