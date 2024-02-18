import "@/styles/globals.css";
import { Provider } from "react-redux";
import Cookies from "js-cookie";
import type { AppProps } from "next/app";
import store from "@/lib/store";
import Image from "next/image";
import Head from "next/head";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const todoPage = router.asPath.includes("/todo-list");

  const handleLogout = () => {
    Cookies.remove("login_cookie");

    router.push("/login_page");
  };
  return (
    <Provider store={store}>
      <Head>
        <title>NextJS Todo app</title>
        <link rel="icon" href="/assets/logo.png" />
      </Head>

      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <Image
          src={"/assets/logo.png"}
          width={100}
          height={80}
          alt="image of logo"
          style={{
            background: "rebeccapurple",
            padding: "10px",
            borderRadius: "8px",
          }}
        />
        {todoPage && (
          <Button variant="outlined" color="error" onClick={handleLogout} sx={{position:'relative',zIndex:'2'}}>
            Logout
          </Button>
        )}
      </header>

      <Component {...pageProps} />
    </Provider>
  );
}
