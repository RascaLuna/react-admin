// in src/components/Profiles/index.tsx
import * as React from "react";
import {
    List,
    Edit,
    Datagrid,
    ReferenceField,
    ReferenceInput,
    BooleanField,
    BooleanInput,
    NumberField,
    TextField,
    EmailField,
    DateField,
    SimpleForm,
    NumberInput,
    TextInput,
    DateInput,
} from "react-admin";

export const ProfileList = (props: any) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <ReferenceField source="profile_id" reference="profiles"><TextField source="id" /></ReferenceField>
            <TextField source="name" />
            <TextField source="nickname" />
            <NumberField source="gender_code" />
            <NumberField source="age" />
            <TextField source="job" />
            <NumberField source="yearly_income" />
            <TextField source="living_environment" />
            <TextField source="marital_status" />
            <TextField source="postcode" />
            <NumberField source="prefecture_code" />
            <TextField source="address" />
            <EmailField source="secondary_email" />
            <TextField source="phone_number" />
            <DateField source="birthday" />
            <NumberField source="watch_count" />
            <BooleanField source="is_win" />
            <TextField source="friend_code" />
            <BooleanField source="is_deleted" />
            <DateField source="logged_at" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
        </Datagrid>
    </List>
);

export const ProfileEdit = (props: any) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <ReferenceInput source="profile_id" reference="profiles"><NumberInput source="id" /></ReferenceInput>
            <TextInput source="name" />
            <TextInput source="nickname" />
            <NumberInput source="gender_code" />
            <NumberInput source="age" />
            <TextInput source="job" />
            <NumberInput source="yearly_income" />
            <TextInput source="living_environment" />
            <TextInput source="marital_status" />
            <TextInput source="postcode" />
            <NumberInput source="prefecture_code" />
            <TextInput source="address" />
            <TextInput source="secondary_email" />
            <TextInput source="phone_number" />
            <DateInput source="birthday" />
            <NumberInput source="watch_count" />
            <BooleanInput source="is_win" />
            <TextInput source="friend_code" />
            <BooleanInput source="is_deleted" />
            <DateInput source="logged_at" />
            <DateInput source="created_at" />
            <DateInput source="updated_at" />
        </SimpleForm>
    </Edit>
);
