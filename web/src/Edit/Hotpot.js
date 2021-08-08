import * as React from "react";
import { Create, Edit, SimpleForm, TextInput } from 'react-admin';

export const HotpotCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" options={{ multiLine: true }} />
        </SimpleForm>
    </Create>
);

export const HotpotEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="name" options={{ multiLine: true }} />
        </SimpleForm>
    </Edit>
);