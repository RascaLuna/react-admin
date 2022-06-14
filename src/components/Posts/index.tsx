// in src/components/Posts/index.tsx
import * as React from "react";
import {
    List,
    Edit,
    Create,
    Datagrid,
    TextField,
    NumberField,
    NumberInput,
    BooleanField,
    SimpleForm,
    TextInput,
    BooleanInput,
    required
} from "react-admin";
import { RichTextInput } from 'ra-input-rich-text';


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

export const PostCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="title" />
            <RichTextInput source="body" />
        </SimpleForm>
    </Create>
);
