import Link from "next/link";
import { useEffect, useState } from "react";

interface IUser {
  id: number;
  name: string;
}

const users = ({ users }) => {
  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`}>user {user.name}</Link>
        </li>
      ))}
    </div>
  );
};
export default users;

export async function getStaticProps(context) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return {
    props: { users }, 
  };
}
