import React from "react";
import {List, Datagrid, TextField} from "react-admin";
const PostList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="userId" />
        <TextField source="title" />
        <TextField source="body" />
      </Datagrid>
    </List>
  );
};

export default PostList;
