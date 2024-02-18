import React from "react";
import { Box } from "@mui/material";
import TodoItem from "../todoItem/TodoItem";

interface ITodo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}
interface ITodoListProps {
  todos: ITodo[];
  avatar:string
}
function TodoList(props: ITodoListProps) {
  const { todos ,avatar} = props;

  return (
    <Box mt={5}>
      {todos?.map((todoItem: any) => {
        return <TodoItem key={todoItem.id} todoItem={todoItem} avatar={avatar}></TodoItem>;
      })}
    </Box>
  );
}

export default TodoList;
