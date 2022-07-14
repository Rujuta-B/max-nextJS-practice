import React from "react";
import { useRouter } from "next/router";

const ProductPage = () => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);
  return <div>This is product page</div>;
};

export default ProductPage;
