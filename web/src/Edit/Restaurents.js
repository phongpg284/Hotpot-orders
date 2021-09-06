import * as React from "react";
import { Create, Edit, SimpleForm, TextInput } from 'react-admin';

export const RestaurentCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="Name" source="name" />
            <TextInput label="Logo" source="logo" options={{ multiLine: true }} />
            <TextInput label="Slogan" source="slogan" options={{ multiLine: true }} />
            <TextInput label="Address" source="address" options={{ multiLine: true }} />
            <TextInput label="Phone" source="phone" options={{ multiLine: true }} />
        </SimpleForm>
    </Create>
);

export const RestaurentEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled label="ID" source="id" />
            <TextInput label="Name" source="name" />
            <TextInput label="Logo" source="logo" />
            <TextInput label="Slogan" source="slogan" />
            <TextInput label="Address" source="address" />
            <TextInput label="Phone" source="phone" />
        </SimpleForm>
    </Edit>
);