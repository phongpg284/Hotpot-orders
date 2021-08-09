import * as React from "react";
import { List, Datagrid, TextField, DateField, DeleteButton, EditButton, ImageField } from 'react-admin';
import PostPagination from "../Pagination/PostPagination";
import useStyles from "../hooks/useStyles";

export const HotpotList = (props) => {
    const classes = useStyles();
    return (
    <List {...props} title="List of hotpots" >
        <Datagrid>
            <TextField source="name" label="Name" />
            <ImageField source="imgUrl" label="Pic" className={classes.imgContainer}/>
            <TextField source="ingredients" label="Ingredients"/>
            <EditButton basePath="./hotpots"/>
            <DeleteButton undoable={false}/>
        </Datagrid>
    </List>
)};