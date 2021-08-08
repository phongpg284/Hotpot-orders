import * as React from "react";
import { Create, Edit, SimpleForm, TextInput } from 'react-admin';

export const OrderCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="User ID" source="userId" />
            <TextInput label="Table ID" source="tableId" options={{ multiLine: true }} />
            <TextInput label="Guest Qty" source="guestQty" options={{ multiLine: true }} />
            <TextInput label="Price Type" source="priceType" options={{ multiLine: true }} />
            <TextInput label="Hotpot Type" source="hotpotType" options={{ multiLine: true }} />
        </SimpleForm>
    </Create>
);

export const OrderEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled label="ID" source="id" />
            <TextInput label="User ID" source="userId" />
            <TextInput label="Table ID" source="tableId" />
            <TextInput label="Guest Qty" source="guestQty" />
            <TextInput label="Price Type" source="priceType" />
            <TextInput label="Hotpot Type" source="hotpotType" />
        </SimpleForm>
    </Edit>
);