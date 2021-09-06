import * as React from "react";
import { List, Datagrid, TextField, DateField, DeleteButton, TextInput, EditButton } from 'react-admin';
import PostPagination from "../Pagination/PostPagination";

const restaurentFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
    <TextInput label="Title" source="title" defaultValue="Hello, World!" />,
];

export const RestaurentList = (props) => (
    <List {...props} title="List of Restaurents" pagination={<PostPagination/>} perPage={5}>
        <Datagrid>
            <TextField source="name" label="Name" />
            <TextField source="logo" label="Logo"/>
            <TextField source="slogan" label="Slogan"/>
            <TextField source="address" label="Address"/>
            <TextField source="phone" label="Phone"/>
            <DateField source="createdAt" label="Created At" showTime/>
            <EditButton basePath="./restaurents"/>
            <DeleteButton undoable={false}/>
        </Datagrid>
    </List>
);