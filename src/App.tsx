// App.tsx
import React from "react";
import { Admin, fetchUtils, Resource } from "react-admin";
import { authProvider } from "./components/authProvider";
import { PostList, PostEdit, PostCreate } from "./components/Posts";
import { ProfileList, ProfileEdit } from "./components/Profiles";
import { ProductList, ProductEdit, ProductShow } from "./components/Products";
import { UserList, UserEdit, UserCreate } from "./components/Users";
import { ProductCreate } from './components/Products';

// コンポーネント作成用
import { ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from 'ra-data-json-server';

import "./App.css";

// const dataProvider = jsonServerProvider("http://localhost:8000", fetchUtils.fetchJson);
import fileUploadProvider from "./components/fileUploadProvider";

function App() {
  return (
    <Admin dataProvider={fileUploadProvider}  authProvider={authProvider}>
      <Resource name="posts"    list={PostList} edit={PostEdit} create={PostCreate} />
      <Resource name="profiles" list={ProfileList} edit={ProfileEdit} />
      <Resource name="products" list={ProductList} edit={ProductEdit} create={ProductCreate} show={ProductShow} />
      <Resource name="users"    list={UserList} edit={UserEdit} create={UserCreate} />
    </Admin>
  );
}

// const App = () => (
//   <Admin dataProvider={dataProvider}>
//     <Resource name="posts"    list={ListGuesser} edit={EditGuesser} />
//     <Resource name="profiles" list={ListGuesser} edit={EditGuesser} />
//     <Resource name="products" list={ListGuesser} edit={EditGuesser} create={ProductCreate} />
//     <Resource name="auth" list={ListGuesser} edit={EditGuesser} />
//   </Admin>
// );

export default App;
