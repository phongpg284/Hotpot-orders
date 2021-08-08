import * as React from "react";
import { Create, Edit, SimpleForm, TextInput } from 'react-admin';

export const IngredientOrderCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="userId" />
            <TextInput source="tableId" />
            <TextInput source="ingredient" />
            <TextInput source="quantity" />            
        </SimpleForm>
    </Create>
);

export const IngredientOrderEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="userId" />
            <TextInput source="tableId" />
            <TextInput source="ingredient" />
            <TextInput source="quantity" />
        </SimpleForm>
    </Edit>
);