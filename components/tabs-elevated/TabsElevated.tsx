import React from "react";
import { styled } from "@mui/material/styles";
import Tab, { tabClasses } from "@mui/material/Tab";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import { Box, Typography } from "@mui/material";
import TodoList from "../todoList/TodoList";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface ITodo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}
interface IElevatedTabsProps {
  todos: ITodo[];
  avatar: string;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const TabItem = styled(Tab)(({ theme }) => ({
  textTransform: "initial",
  margin: theme.spacing(0, 2),
  minWidth: 0,
  fontWeight: "normal",
  letterSpacing: 0.5,
  color: "#fff",
  borderRadius: "8px",
  [`&.${tabClasses.selected}`]: {
    color: "#fff",
  },
  [theme.breakpoints.up("md")]: {
    minWidth: 0,
  },
}));

export function TabsElevated(props: IElevatedTabsProps) {
  const { todos, avatar } = props;
  const [tabIndex, setTabIndex] = React.useState(0);


  const completedTodos=todos.filter((todo)=>todo.completed)

  return (
    <Box>
      <Tabs
        value={tabIndex}
        onChange={(e, index) => setTabIndex(index)}
        sx={{
          width: "100%",
          borderRadius: "8px",
          background: "linear-gradient(60deg, #ab47bc, #663399)",
          padding: "10px",
          justifyContent:'space-between !important',
          boxShadow: "0px 3px 15px rgba(34, 35, 58, 0.5)",
          [`& .${tabsClasses.indicator}`]: {
            height: "100%",
            borderRadius: "8px",
            backgroundColor: "rgba(255, 255, 255, .2)",
          },
        }}
      >
       
        <TabItem label={"All Todos"} />
        <TabItem label={"Completed Todos"} />
      </Tabs>

      <Box>
        <CustomTabPanel value={tabIndex} index={0}>
          <TodoList todos={todos} avatar={avatar} />
        </CustomTabPanel>
        <CustomTabPanel value={tabIndex} index={1}>
          <TodoList todos={completedTodos} avatar={avatar} />
          </CustomTabPanel>
      </Box>
    </Box>
  );
}
