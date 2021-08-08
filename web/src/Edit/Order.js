import * as React from "react";
import { Create, Edit, SimpleForm, TextInput } from 'react-admin';

export const OrderCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="userId" />
            <TextInput source="tableId" options={{ multiLine: true }} />
            <TextInput source="guestQty" options={{ multiLine: true }} />
            <TextInput source="priceType" options={{ multiLine: true }} />
            <TextInput source="hotpotType" options={{ multiLine: true }} />
        </SimpleForm>
    </Create>
);

export const OrderEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="userId" />
            <TextInput source="tableId" />
            <TextInput source="guestQty" />
            <TextInput source="priceType" />
            <TextInput source="hotpotType" />
        </SimpleForm>
    </Edit>
);