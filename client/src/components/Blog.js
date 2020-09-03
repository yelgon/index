import React from "react";
import { useQuery, gql } from "@apollo/client";
import Post from "./Post";

const LAUNCHES_QUERY = gql`
  {
    posts {
      userId
      user {
        username
      }
      id
      title
      body
    }
  }
`;

export default function Blog() {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  if (loading) return <h4>Loading...</h4>;
  if (error) {
    console.log(error);
    return <h4>Error :</h4>;
  }

  return (
    <div>
      <h1 className="display-5 my-4">Yangoh's Blog</h1>
      {data.posts.map((e) => (
        <Post key={e.id} posts={e} />
      ))}
    </div>
  );
}
