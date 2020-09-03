import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { LoremIpsum } from "react-lorem-ipsum";
import styled from "styled-components";
const TextWrapper = styled.div`
  margin: 30px;
  p {
    font-size: 20px;
  }
  h5 {
    text-align: right;
    margin: 50px 50px;
  }
`;

export default function PostContent() {
  const { postId } = useParams();

  const POST_QUERY = gql`
    {
      post(id: ${parseInt(postId)}) {
        userId
          user{
            username
            email
            phone
            website
          }
        id
        title
        body
      }
    }
  `;

  const { loading, error, data } = useQuery(POST_QUERY);
  console.log(data);

  if (loading) return <h4>Loading...</h4>;
  if (error) {
    console.log(error);
    return <h4>Error :</h4>;
  }

  return (
    <TextWrapper>
      <Link
        to="/"
        style={{
          position: "absolute",
          right: "100px",
          top: "50px",
          fontSize: "1.5em",
        }}
      >
        Home
      </Link>
      <h4 style={{ marginBottom: "50px" }}>{data.post.title}</h4>
      <p>{data.post.body}</p>

      <LoremIpsum p={3} />
      <h5>{data.post.user.username}</h5>
    </TextWrapper>
  );
}
