// App.tsx
import React from "react";
import {Admin, Resource} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
// import {PostList} from "../src/components/Posts";
import {UserList} from "../src/components/Users";
import "./App.css";
// const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const dataProvider = jsonServerProvider("http://localhost:8000");

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      {/* <Resource name="posts" list={PostList} /> */}
      <Resource name="users" list={UserList} />
    </Admin>
  );
}

// const App = () => (
//   <Admin dataProvider={dataProvider}>
//     <Resource name="users" list={ListGuesser} />
//   </Admin>
// );

export default App;
