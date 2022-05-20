// in src/components/Posts/index.tsx
import * as React from "react";
import {
    List,
    Edit,
    Datagrid,
    NumberField,
    NumberInput,
    ReferenceInput,
    DateField,
    SimpleForm,
    TextInput,
    DateInput,
    SelectInput,
} from "react-admin";

export const PointList = (props: any) => (
    <List {...props}>
        <Datagrid rowClick="edit">
        <NumberField source="id" />
        <NumberField source="user_id" />
        <NumberField source="total_point" />
        <DateField source="created_at" showTime />
        <DateField source="updated_at" showTime />
        </Datagrid>
    </List>
);

export const PointEdit = (props: any) => (
    <Edit {...props}>
        <SimpleForm>
        <TextInput source="id" />
        <ReferenceInput source="user_id" reference="users">
            <SelectInput optionText="id" />
        </ReferenceInput>
        <NumberInput source="total_point" />
        <DateInput source="updated_at" />
        <DateInput source="created_at" />
        </SimpleForm>
    </Edit>
);
