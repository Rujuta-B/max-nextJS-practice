import React from "react";
import Link from "next/link";

const ClientsIndex = () => {
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
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: "{id: client.id}",
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsIndex;
