// App.tsx
import React from "react";
import { Admin, Resource } from "react-admin";
import { ListGuesser, EditGuesser } from "react-admin"; // コンポーネント作成用
import jsonServerProvider from "ra-data-json-server";
import { PostList } from "./components/Posts";
import { PostEdit } from "./components/Posts";
import { PostCreate } from "./components/Posts";
import { ProfileList } from "./components/Profiles";
import { ProfileEdit } from "./components/Profiles";
import { ProductList } from "./components/Products";
import { ProductEdit } from "./components/Products";

import { ProductCreate } from './components/Products'

import "./App.css";

// const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const dataProvider = jsonServerProvider("http://localhost:8000");

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="posts"    list={PostList} edit={PostEdit} create={PostCreate} />
      <Resource name="profiles" list={ProfileList} edit={ProfileEdit} />
      <Resource name="products" list={ProductList} edit={ProductEdit} create={ProductCreate} />
    </Admin>
  );
}

// const App = () => (
//   <Admin dataProvider={dataProvider}>
//     <Resource name="posts"    list={PostList} edit={PostEdit} />
//     <Resource name="profiles" list={ProfileList} edit={ProfileEdit} />
//     <Resource name="products" list={ProductList} edit={ProductEdit} create={ProductCreate} />
//   </Admin>
// );

export default App;
