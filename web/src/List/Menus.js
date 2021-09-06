import * as React from "react";
import { List, Datagrid, TextField, DateField, DeleteButton, TextInput, EditButton } from 'react-admin';
import PostPagination from "../Pagination/PostPagination";

const menuFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
    <TextInput label="Title" source="title" defaultValue="Hello, World!" />,
];

export const MenuList = (props) => (
    <List {...props} title="Menu" pagination={<PostPagination/>} perPage={5}>
        <Datagrid>
            <TextField source="id" label="Id" />
            <TextField source="name" label="Name" />
            <TextField source="price" label="Price"/>
            <EditButton basePath="./menu"/>
            <DeleteButton undoable={false}/>
        </Datagrid>
    </List>
);