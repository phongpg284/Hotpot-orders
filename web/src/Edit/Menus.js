import * as React from "react";
import { Create, Edit, SimpleForm, TextInput } from 'react-admin';

export const MenuCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="Id" source="id" options={{ multiLine: true }} />
            <TextInput label="Name" source="name" />
            <TextInput label="Price" source="price" options={{ multiLine: true }} />
        </SimpleForm>
    </Create>
);

export const MenuEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            {/* <TextInput disabled label="ID" source="id" /> */}
            <TextInput label="Id" source="id" />
            <TextInput label="Name" source="name" />
            <TextInput label="Price" source="price" />
        </SimpleForm>
    </Edit>
);