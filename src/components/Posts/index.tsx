// in src/components/Posts/index.tsx
import * as React from "react";
import {List, Datagrid, TextField, ReferenceField} from "react-admin";

export const PostList = (props:any) => (
    <List {...props}>
        <Datagrid rowClick="edit">
        <ReferenceField source="userId" reference="users">
            <TextField source="name" />
        </ReferenceField>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="body" />
        </Datagrid>
    </List>
);
