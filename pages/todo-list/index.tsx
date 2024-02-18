"use client";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { styled, Box, BoxProps, TextField, FormControl } from "@mui/material";
import Heading from "@/components/globalComponents/Heading";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/lib";
import { GetServerSideProps } from "next";
import { useSelector, useDispatch } from "react-redux";
import { LavenderButton } from "@/components/customButtons/CustomButtons";
import { addTodo } from "@/lib/feature/todo/todoSlice";
import dayjs from "dayjs";
import { TabsElevated } from "@/components/tabs-elevated";

const StyledBox = styled(Box)<BoxProps>(() => ({
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  flexDirection: "column",
  padding: "50px 0",
  position:'relative',
  top:'-150px'
}));

function TodoListPage({ alltodos }: any) {
  const [user, setUser] = useState<any>({});
  const [newTodo, setNewTodo] = useState("");
  const currentDate = dayjs();
  
  const formattedDateTime = currentDate.format('YYYY-MM-DD HH:mm:ss');
  const todos = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const new_Todo = await fetch("https://dummyjson.com/todos/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          todo: newTodo,
          completed: false,
          userId: 5,
        }),
      }).then((res) => res.json());
      setNewTodo("");
      dispatch(
        addTodo({
          id: formattedDateTime,
          todo: new_Todo.todo,
          completed: new_Todo.completed,
          userId: new_Todo.userId,
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setNewTodo(value);
  };

  useEffect(() => {
    const user_token = localStorage.getItem("userToken");

    const fetchData = async () => {
      const userData = await fetch("https://dummyjson.com/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user_token}`,
        },
      }).then((res) => res.json());

      setUser(userData);
    };
    fetchData();
  }, []);

  return (
    <StyledBox>
      {user && (
        <Heading text={`${user.firstName} ${user?.lastName} `} />
      )}
      <Box>
        <form
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          style={{ display: "flex", alignItems: "center" ,gap:'8px' }}
        >
          <FormControl>
            <TextField
              id="fullWidth"
              value={newTodo}
              sx={{ width: "530px"}}
              onChange={handleInputChange}
              placeholder="What's you focus today?"
            />
          </FormControl>
          <LavenderButton disabled={newTodo === ""} type="submit">
            {" "}
            ADD
          </LavenderButton>
        </form>
        <TabsElevated todos={todos} avatar={user.image} />
      </Box>
     
    
    </StyledBox>
  );
}

export default TodoListPage;

export const getServerSideProps = (async (context) => {
  const session = await getIronSession<SessionData>(
    context.req,
    context.res,
    sessionOptions
  );
  if (!session.isLoggedIn) {
    return {
      redirect: {
        destination: "/login_page",
        permanent: false,
      },
    };
  }
  const alltodos = await fetch("https://dummyjson.com/todos?limit=6").then(
    (res) => res.json()
  );

  return { props: { session, alltodos } };
}) satisfies GetServerSideProps<{
  session: SessionData;
}>;
