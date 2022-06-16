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
import { S3FileField } from '@fusionworks/ra-s3-input';
import { S3FileInput } from '@fusionworks/ra-s3-input';

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
                <S3FileField
                    apiRoot=''
                    source='obj_url'
                />
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
            <TextInput source="product_name" validate={[required()]} fullWidth />
            <RichTextInput source="detail" />
            <ImageInput source="images" label="related photos" accept="image/* ">
                <ImageField source="obj_url" />
            </ImageInput>
        </SimpleForm>
    </Create>
);
