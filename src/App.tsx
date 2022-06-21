// App.tsx
import React from "react";
import { Admin, fetchUtils, Resource } from "react-admin";
import { PostList, PostEdit, PostCreate } from "./components/Posts";
import { ProfileList, ProfileEdit } from "./components/Profiles";
import { ProductList, ProductEdit, ProductShow } from "./components/Products";
import { ProductCreate } from './components/Products'

import jsonServerProvider from "ra-data-json-server";
import simpleRestProvider from "ra-data-simple-rest";
// コンポーネント作成用
// import { ListGuesser, EditGuesser } from "react-admin";
import "./App.css";

// const dataProvider = jsonServerProvider("http://localhost:8000", fetchUtils.fetchJson);
// const dataProvider = simpleRestProvider("http://localhost:8000", fetchUtils.fetchJson, 'X-Total-Count');
import myDataProvider from "./myDataProvider";

function App() {
  return (
    <Admin dataProvider={myDataProvider}>
      <Resource name="posts"    list={PostList} edit={PostEdit} create={PostCreate} />
      <Resource name="profiles" list={ProfileList} edit={ProfileEdit} />
      <Resource name="products" list={ProductList} edit={ProductEdit} create={ProductCreate} show={ProductShow} />
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
