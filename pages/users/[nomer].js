import React from "react";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";
import { getUserById } from "../../api";

export default function User(props) {
  const router = useRouter();

  console.log(router);

  const { nomer } = router.query;

  return (
    <>
      <Typography variant="h3"> {nomer} </Typography>
      <Typography> {JSON.stringify(props)} </Typography>
    </>
  );
}

export async function getServerSideProps(context) {
  console.log(context.query.nomer);
  const res = await getUserById(context.query.nomer);
  return {
    props: res, // will be passed to the page component as props
  };
}
