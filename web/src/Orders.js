import * as React from "react";
import { List, Datagrid, TextField, DateField } from 'react-admin';

export const OrderList = (props) => (
    <List {...props} title="List of orders">
        <Datagrid>
            <TextField source="userId" label="User ID" />
            <TextField source="guestQty" label="Guest Qty"/>
            <TextField source="priceType" label="Price Type"/>
            <TextField source="hotpotType" label="HotpotType"/>
            <DateField source="createdAt" label="Created At" showTime/>
        </Datagrid>
    </List>
);