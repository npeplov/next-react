import { useRouter } from "next/router";
import styles from "../../styles/User.module.scss";

export default function User({user}) {
  console.log(user);
  const { query } = useRouter();
  return (
    <div className={styles.user}>
      <h1>User id# {query.id} {user.name}</h1>
    </div>
  );
}

export async function getServerSideProps({params}) {
  const {id} = params
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await response.json();
  return {
    props: {user }, 
  };
}