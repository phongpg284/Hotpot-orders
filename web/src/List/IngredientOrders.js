import * as React from "react";
import { List, Datagrid, TextField, DateField, DeleteButton, EditButton, ImageField } from 'react-admin';
import useStyles from "../hooks/useStyles";
import PostPagination from "../Pagination/PostPagination";

export const IngredientOrderList = (props) => {
    const classes = useStyles();
    return (
    <List {...props} title="List of Kitchen orders">
        <Datagrid>
            {/* <TextField source="userId" label="User ID" /> */}
            <TextField source="tableId" label="Table ID" />
            <TextField source="ingredient" label="Ingredient"/>
            <ImageField source="imgUrl" label="Pic" className={classes.imgContainer}/>
            <TextField source="quantity" label="Quantity"/>
            <DateField source="createdAt" label="Created At" showTime/>
            <EditButton basePath="./ingredientOrders"/>
            <DeleteButton undoable={false}/>
        </Datagrid>
    </List>
)};