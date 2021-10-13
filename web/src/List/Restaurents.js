import * as React from "react";
import { List, Datagrid, TextField, DateField, DeleteButton, TextInput, EditButton, ImageField } from 'react-admin';
import PostPagination from "../Pagination/PostPagination";
import useStyles from "../hooks/useStyles";

const restaurentFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
    <TextInput label="Title" source="title" defaultValue="Hello, World!" />,
];

export const RestaurentList = (props) => {
    const classes = useStyles();

    return (
    <List {...props} title="List of Restaurents" pagination={<PostPagination/>} perPage={5}>
        <Datagrid>
            <TextField source="name" label="Name" />
            <ImageField source="logo" label="Logo" className={classes.imgContainer} />
            <TextField source="slogan" label="Slogan"/>
            <TextField source="address" label="Address"/>
            <TextField source="phone" label="Phone"/>
            <DateField source="createdAt" label="Created At" showTime/>
            <EditButton basePath="./restaurents"/>
            <DeleteButton undoable={false}/>
        </Datagrid>
    </List>
)};