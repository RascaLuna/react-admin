// App.tsx
import React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { PostList } from "./components/Posts";
import { PostEdit } from "./components/Posts";
import { ProfileList } from "../src/components/Profiles";
import { ProfileEdit } from "../src/components/Profiles";

import "./App.css";

// const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const dataProvider = jsonServerProvider("http://localhost:8000");

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="posts" list={PostList} edit={PostEdit} />
      <Resource name="profiles" list={ProfileList} edit={ProfileEdit} />
    </Admin>
  );
}

// const App = () => (
//   <Admin dataProvider={dataProvider}>
//     <Resource name="posts" list={PostList} edit={PostEdit} />
//     <Resource name="profiles" list={ProfileList} edit={ProfileEdit} />
//   </Admin>
// );

export default App;
