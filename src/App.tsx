// App.tsx
import React from "react";
import {Admin, Resource} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import {PostList} from "../src/components/Posts";
import {UserList} from "../src/components/Users";
import "./App.css";
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="posts" list={PostList} />
      <Resource name="users" list={UserList} />
    </Admin>
  );
}

export default App;
