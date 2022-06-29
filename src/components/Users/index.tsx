// in src/components/Users/index.tsx
import * as React from "react";
import {
    List,
    Edit,
    Create,
    Datagrid,
    TextField,
    NumberField,
    NumberInput,
    EmailField,
    BooleanField,
    SimpleForm,
    TextInput,
    BooleanInput,
} from "react-admin";
import { RichTextInput } from 'ra-input-rich-text';


export const UserList = (props: any) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <EmailField source="email" />
            <TextField source="password" />
        </Datagrid>
    </List>
);

export const UserEdit = (props: any) => (
    <Edit {...props}>
        <SimpleForm>
            <NumberInput source="id" />
            <TextInput source="email" />
            <TextInput source="password" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="email" />
            <TextInput source="password" />
        </SimpleForm>
    </Create>
);
