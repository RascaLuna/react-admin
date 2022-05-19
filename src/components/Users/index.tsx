// in src/components/Users/index.tsx
import * as React from "react";
import {List, Edit, Datagrid, NumberField, TextField, EmailField, DateField, SimpleForm, TextInput, DateInput} from "react-admin";

export const UserList = (props:any) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="sex" />
            <TextField source="prefecture" />
            <DateField source="birthday" />
            <DateField source="created_at" showTime />
            <DateField source="updated_at" showTime  />
        </Datagrid>
    </List>
);

export const UserEdit = (props:any) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="sex" />
            <TextInput source="email" />
            <TextInput source="prefecture" />
            <DateInput source="birthday" />
        </SimpleForm>
    </Edit>
);
