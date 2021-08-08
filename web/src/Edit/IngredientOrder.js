import * as React from "react";
import { Create, Edit, SimpleForm, TextInput } from 'react-admin';

export const IngredientOrderCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="User ID" source="userId" />
            <TextInput label="Table ID" source="tableId" />
            <TextInput label="Ingredient Name" source="ingredient" />
            <TextInput label="Quantity" source="quantity" />            
        </SimpleForm>
    </Create>
);

export const IngredientOrderEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput label="User ID" source="userId" />
            <TextInput label="TableID" source="tableId" />
            <TextInput label="Ingredient Name" source="ingredient" />
            <TextInput label="Quantity" source="quantity" />
        </SimpleForm>
    </Edit>
);