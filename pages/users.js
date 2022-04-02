import React from "react";
import { getUsers } from "../api";
import Layout from "../components/Layout";

export default function users(props) {
  console.log(props);

  return <Layout>users</Layout>;
}

export async function getStaticProps(context) {
  // console.log(context);

  const res = await getUsers();
  // console.log(res);
  return {
    props: res, // will be passed to the page component as props
  };
}
