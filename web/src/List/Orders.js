import * as React from "react";
import { List, Datagrid, TextField, DateField, DeleteButton, TextInput } from 'react-admin';
import PostPagination from "../Pagination/PostPagination";

const orderFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
    <TextInput label="Title" source="title" defaultValue="Hello, World!" />,
];

export const OrderList = (props) => (
    <List {...props} title="List of orders" pagination={<PostPagination/>} perPage={5}>
        <Datagrid>
            <TextField source="userId" label="User ID" />
            <TextField source="tableId" label="Table ID"/>
            <TextField source="guestQty" label="Guest Qty"/>
            <TextField source="priceType" label="Price Type"/>
            <TextField source="hotpotType" label="HotpotType"/>
            <DateField source="createdAt" label="Created At" showTime/>
            <DeleteButton undoable={false}/>
        </Datagrid>
    </List>
);