import React from "react";
import { useQuery, gql } from "@apollo/client";

const LAUNCHES_QUERY = gql`
  {
    posts {
      userId
      id
      title
      body
    }
  }
`;

function Launches() {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  if (loading) return <h4>Loading...</h4>;
  if (error) {
    console.log(error);
    return <h4>Error :</h4>;
  }
  console.log(data);
  return (
    <div>
      <h1 className="display-4 my-3">Launches</h1>
      {data.posts.map((e) => (
        <div key={e.id}>{e.title}</div>
      ))}
    </div>
  );
}

export default Launches;
