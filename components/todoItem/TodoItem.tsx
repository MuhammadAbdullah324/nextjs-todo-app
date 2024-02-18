import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Checkbox,
  FormControl,
  IconButton,
  Modal,
  Paper,
  TextField,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import {
  completeTodo,
  deleteTodo,
  updateTodo,
} from "@/lib/feature/todo/todoSlice";
import { LavenderButton } from "../customButtons/CustomButtons";

interface ITodo {
  id: string;
  todo: string;
  completed: boolean;
  userId: number;
}

interface ITodoItemProps {
  todoItem: ITodo;
  avatar: string;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  boxShadow: 24,
  padding: "65px 20px",
  borderRadius: "8px",
};

function TodoItem(props: ITodoItemProps) {
  const { todoItem, avatar } = props;
  const [open, setOpen] = React.useState(false);
  const [updatedTodo, setUpdatedTodo] = useState(todoItem.todo);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const handleRemoveTodo = () => {
    dispatch(deleteTodo(todoItem.id));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const updated_Todo = await fetch("https://dummyjson.com/todos/1", {
        method: "PUT" /* or PATCH */,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          todo: updatedTodo,
          completed: false,
        }),
      }).then((res) => res.json());

      dispatch(
        updateTodo({
          id: todoItem.id,
          todo: updated_Todo.todo,
        })
      );
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setUpdatedTodo(value);
  };
  const handleCompleteTodo = (todoId: string) => {
    dispatch(completeTodo(todoId));
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 680,
          borderRadius: "20px",
          boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
          transition: "0.3s",
          marginTop: "15px",
        }}
      >
        <Box sx={{ minWidth: 700 }}>
          <Box
            sx={{
              padding: `4px 24px 0`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Avatar
              alt={"Avater image"}
              src={avatar}
              sx={(theme) => ({
                width: 48,
                height: 48,
                transform: "translateY(50%)",
                "& > img": {
                  margin: 0,
                  backgroundColor: "common.white",
                },
                [theme.breakpoints.up("sm")]: {
                  width: 60,
                  height: 60,
                },
              })}
            />
            <Box display={"flex"} justifyContent={"flex-end"}>
              <Tooltip title="Delete">
                <IconButton
                  disableRipple
                  aria-label="delete"
                  onClick={handleRemoveTodo}
                >
                  <DeleteIcon sx={{ color: "red" }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Edit">
              <IconButton disableRipple aria-label="edit" onClick={handleOpen}>
                <EditIcon />
              </IconButton>
              </Tooltip>
            </Box>
          </Box>
          <Box
            component="hr"
            sx={(theme) => ({
              backgroundColor: "grey.200",
              marginBottom: `${24 - 1}px`,
              [theme.breakpoints.up("sm")]: {
                marginBottom: `${30 - 1}px`,
              },
            })}
          />
        </Box>
        <CardContent sx={{ p: 3 }}>
          <Typography
            sx={{ fontSize: "16px", color: "gray", fontWeight: "600", mb: 1 }}
          >
            {todoItem.id}
          </Typography>

          <Box display={"flex"} gap={"10px"} alignItems={"center"}>
            <Checkbox
            value={todoItem.completed}
            checked={todoItem.completed}
              sx={{
                "&.Mui-checked": {
                  color: "#9E77ED",
                },
                "& .MuiSvgIcon-root": { fontSize: 30 },
              }}
              onChange={() => handleCompleteTodo(todoItem.id)}
            />
            <Typography
              sx={{
                fontSize: "24px",
                color: "#9E77ED",
                fontWeight: "600",
                textDecoration: `${todoItem.completed ? "line-through" : "none"}`,
              }}
            >
              {todoItem.todo}
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              gap: "8px",
            }}
          >
            <FormControl>
              <TextField
                id="fullWidth"
                label="Update todo"
                value={updatedTodo}
                sx={{ width: "475px" }}
                onChange={handleInputChange}
              />
            </FormControl>
            <LavenderButton disabled={updatedTodo === ""} type="submit">
              {" "}
              Update
            </LavenderButton>
          </form>
        </Box>
      </Modal>
    </>
  );
}

export default TodoItem;
