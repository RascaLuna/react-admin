// in src/components/Posts/index.tsx
import * as React from "react";
import {
    List,
    Show,
    Edit,
    Create,
    Datagrid,
    TextField,
    NumberField,
    ImageField,
    SimpleForm,
    TextInput,
    NumberInput,
    ImageInput,
    required,
    SimpleShowLayout
} from "react-admin";
import { RichTextInput } from 'ra-input-rich-text';

export const ProductList = (props: any) => (
    <List {...props}>
        <Datagrid rowClick="show">
            <NumberField source="id" />
            <TextField source="product_name" />
            <TextField source="detail" />
            <TextField source="obj_url" />
        </Datagrid>
    </List>
);

export const ProductShow = (props: any) => (
        <Show {...props}>
            <SimpleShowLayout>
                <NumberField source="id" />
                <TextField source="product_name" />
                <TextField source="detail" />
                <ImageField source="obj_url" />
            </SimpleShowLayout>
        </Show>
);

export const ProductEdit = (props: any) => (
    <Edit {...props}>
        <SimpleForm>
            <NumberInput source="id" />
            <TextInput source="product_name" />
            <TextInput source="detail" />
            <ImageField source="obj_url" />
            <ImageInput source="obj_url" />
        </SimpleForm>
    </Edit>
);


export const ProductCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="product_name" validate={[required()]} />
            <RichTextInput source="detail" />
            <ImageInput
                multiple={true}
                source="file"
                label="Related pictures"
                accept="image/*"
            >
                <ImageField source="url" title="name" />
            </ImageInput>
        </SimpleForm>
    </Create>
);
