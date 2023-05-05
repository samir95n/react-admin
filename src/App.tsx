import {useState} from "react";
import "./App.css";
import {Admin, Resource, defaultTheme} from "react-admin";
import restProvider from "ra-data-json-server";
import UserList from "./components/userList";
import PostList from "./components/postList";
import CustomLayout from "./components/customLayout";

const theme: any = {
  ...defaultTheme,
  components: {
    ...defaultTheme.components,
    RaDatagrid: {
      styleOverrides: {
        root: {
          backgroundColor: "#1f2024",
          "& .RaDatagrid-headerCell": {
            backgroundColor: "#2c2f36",
          },
        },
      },
    },
  },
  palette: {
    mode: "dark", // Switching the dark mode
  },
};
function App() {
  return (
    <Admin
      theme={theme}
      layout={CustomLayout}
      dataProvider={restProvider("https://jsonplaceholder.typicode.com")}
    >
      <Resource name="users" list={UserList} />
      <Resource name="posts" list={PostList} />
    </Admin>
  );
}

export default App;
