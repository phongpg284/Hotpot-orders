import * as React from "react";
import { Create, Edit, SimpleForm, TextInput } from 'react-admin';

export const IngredientCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" label="ID"/>
            <TextInput source="name" label="Name"/>
            <TextInput source="quantity" label="Quantity"/>
            <TextInput source="imgUrl" label="Pic"/>
        </SimpleForm>
    </Create>
);

export const IngredientEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" label="ID"/>
            <TextInput source="name" label="Name"/>
            <TextInput source="quantity" label="Quantity"/>
            <TextInput source="imgUrl" label="Pic"/>
        </SimpleForm>
    </Edit>
);