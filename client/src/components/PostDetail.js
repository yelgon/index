import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import styled from "styled-components";
import Comment from "./Comment";
import ShareBySNS from "./ShareBySNS";
import AuthorProfile from "./AuthorProfile";

const TextWrapper = styled.div`
  margin: 30px;
  p {
    font-size: 20px;
  }
`;
const AuthorName = styled.div`
  :hover {
    cursor: pointer;
  }
  text-align: right;
`;

export default function PostDetail() {
  const [showing, setShowing] = useState(false);
  const handleClick = () => {
    setShowing(!showing);
  };
  console.log(showing);
  const { postId } = useParams();
  const intPostId = parseInt(postId);
  const POST_QUERY = gql`
    {
      post(id: ${intPostId}) {
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
      <div style={{ position: "relative" }}>
        {showing && <AuthorProfile user={data.post.user} />}
        <AuthorName onClick={handleClick}>
          <h5>- {data.post.user.username} -</h5>
          <div style={{ textAlign: "right" }} className="badge badge-danger">
            Click to see author profile
          </div>
        </AuthorName>
      </div>
      <div className="badge badge-light">Click the icon to share this post</div>
      <ShareBySNS postId={postId} />
      <h4
        style={{
          borderBottom: "2px solid green",
          paddingBottom: "5px",
          marginTop: "30px",
        }}
      >
        Comments
      </h4>
      <Comment postId={intPostId} />
    </TextWrapper>
  );
}
