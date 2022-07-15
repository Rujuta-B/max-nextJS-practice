import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const ClientsIndex = () => {
  const router = useRouter();

  const clickHandler = () => {
    router.push({
      pathname: "/clients/[id]/[clientprojectId]",
      query: { id: "DC", clientprojectId: "Rujuta" },
    });
  };
  const clients = [
    { id: "marvel", name: "Thor" },
    { id: "DC", name: "Batman" },
    { id: "narnia", name: "White Witch" },
  ];

  return (
    <div>
      You can make a dynamic folder as well which can have dynamic files within
      <ul>
        {clients.map((client) => (
          <li key={client.id}>{client.name}</li>
        ))}
      </ul>
      <button onClick={clickHandler}>Click me</button>
    </div>
  );
};

export default ClientsIndex;
