import * as React from "react";
import { Create, Edit, SimpleForm, TextInput } from 'react-admin';

export const HotpotCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="Hotpot Type" source="name" />
            <TextInput source="imgUrl" label="Pic"/>
        </SimpleForm>
    </Create>
);

export const HotpotEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled label="ID" source="id" />
            <TextInput label="Hotpot Type" source="name" />
            <TextInput source="imgUrl" label="Pic"/>
        </SimpleForm>
    </Edit>
);