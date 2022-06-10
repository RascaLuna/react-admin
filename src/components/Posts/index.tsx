// in src/components/Posts/index.tsx
import * as React from "react";
import {
    List,
    Edit,
    Datagrid,
    TextField,
    NumberField,
    NumberInput,
    BooleanField,
    ReferenceInput,
    DateField,
    SimpleForm,
    TextInput,
    DateInput,
    SelectInput,
    BooleanInput,
} from "react-admin";

export const PostList = (props: any) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="title" />
            <TextField source="body" />
            <BooleanField source="is_deleted" />
        </Datagrid>
    </List>
);

export const PostEdit = (props: any) => (
    <Edit {...props}>
        <SimpleForm>
            <NumberInput source="id" />
            <TextInput source="title" />
            <TextInput source="body" />
            <BooleanInput source="is_deleted" />
        </SimpleForm>
    </Edit>
);
