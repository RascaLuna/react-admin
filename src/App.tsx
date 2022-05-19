// App.tsx
import React from "react";
import {Admin, Resource} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import {PointList} from "../src/components/Points";
import {UserList} from "../src/components/Users";
import {UserEdit} from "../src/components/Users";

import "./App.css";
// const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const dataProvider = jsonServerProvider("http://localhost:8000");

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="points" list={PointList} />
      <Resource name="users" list={UserList} edit={UserEdit} />
    </Admin>
  );
}

// const App = () => (
//   <Admin dataProvider={dataProvider}>
//     <Resource name="users" list={ListGuesser} />
//   </Admin>
// );

export default App;
