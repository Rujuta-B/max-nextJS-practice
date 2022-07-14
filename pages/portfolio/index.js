import React from "react";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  console.log(router.query);
  console.log(router.pathname);
  return <div>This is an introductory to my Portfolio</div>;
};

export default index;
