import React from "react";
import { useQuery, gql } from "@apollo/client";

export default function Comment(props) {
  const COMMENT_QUERY = gql`
    {
      comments(postId: ${props.postId}) {
        postId
        id
        name
        email
        body
      }
    }
  `;

  const { loading, error, data } = useQuery(COMMENT_QUERY);

  if (loading) return <h4>Loading...</h4>;
  if (error) {
    console.log(error);
    return <h4>Error :</h4>;
  }
  return data.comments.map((e) => (
    <div key={e.id} className="card card-footer mb-3">
      <div style={{ marginBottom: "10px" }}>{e.body}</div>
      <div style={{ textAlign: "right" }}>{e.name}</div>
      <div style={{ textAlign: "right" }}>{e.email}</div>
    </div>
  ));
}
