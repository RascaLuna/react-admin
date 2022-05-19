// in src/components/Posts/index.tsx
import * as React from "react";
import {List, Datagrid, NumberField, DateField} from "react-admin";

export const PointList = (props:any) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <NumberField source="user_id" />
            <NumberField source="total_point" />
            <DateField source="created_at" showTime />
            <DateField source="updated_at" showTime  />
        </Datagrid>
    </List>
);
