import * as React from "react";
import { Create, Edit, SimpleForm, TextInput } from 'react-admin';

export const IngredientCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="quantity" />
        </SimpleForm>
    </Create>
);

export const IngredientEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="quantity"/>
        </SimpleForm>
    </Edit>
);