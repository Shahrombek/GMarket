import Head from "next/head";
import { useRouter } from "next/router";
import { ThemeProvider } from "@mui/material/styles";
import ThemeContext from "../styles/createTheme";
import { useState } from "react";
import Layout from "./Layout";

export default function Home() {
  const router = useRouter();
  const [mode, setMode] = useState("light");

  return (
    <>
      <Layout>
        
      </Layout>
      
    </>
  );
}
