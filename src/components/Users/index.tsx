// in src/components/Users/index.tsx
import * as React from "react";
import {List, Datagrid, NumberField, TextField, EmailField, DateField} from "react-admin";

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
