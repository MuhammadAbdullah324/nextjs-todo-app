"use client";
import Login from "@/components/login";
import { styled, Box, BoxProps } from "@mui/material";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/lib";
import { GetServerSideProps } from "next";

function Home() {
  const StyledBox = styled(Box)<BoxProps>(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
  }));
  return (
    <StyledBox>
      <Login />
    </StyledBox>
  );
}
export default Home;

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
  } else {
    return {
      redirect: {
        destination: "/todo-list",
        permanent: false,
      },
    };
  }

}) satisfies GetServerSideProps<{
  session: SessionData;
}>;
