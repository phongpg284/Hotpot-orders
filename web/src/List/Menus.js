import * as React from "react";
import { List, Datagrid, TextField, DateField, DeleteButton, TextInput, EditButton } from 'react-admin';
import PostPagination from "../Pagination/PostPagination";

const menuFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
    <TextInput label="Title" source="title" defaultValue="Hello, World!" />,
];

export const MenuList = (props) => (
    <List {...props} title="List of orders" pagination={<PostPagination/>} perPage={5}>
        <Datagrid>
            <TextField source="name" label="Name" />
            <TextField source="tableId" label="Table ID"/>
            <TextField source="price" label="Price"/>
            <DateField source="createdAt" label="Created At" showTime/>
            <EditButton basePath="./menus"/>
            <DeleteButton undoable={false}/>
        </Datagrid>
    </List>
);