import React from "react";
import { useRouter } from "next/router";

const ProductPage = () => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);
  return <div>Single page of the project with a given ID</div>;
};

export default ProductPage;
