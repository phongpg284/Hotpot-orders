import * as React from "react";
import { List, Datagrid, TextField, DateField, DeleteButton } from 'react-admin';

export const HotpotList = (props) => (
    <List {...props} title="List of hotpots">
        <Datagrid>
            <TextField source="name" label="Name" />
            <TextField source="ingredients" label="Ingredients"/>
            <TextField source="priceType" label="Price Type"/>
            <DateField source="createdAt" label="Created At" showTime/>
            <DeleteButton undoable={false}/>
        </Datagrid>
    </List>
);