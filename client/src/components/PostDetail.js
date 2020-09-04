import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { LoremIpsum } from "react-lorem-ipsum";
import styled from "styled-components";
import Comment from "./Comment";
import ShareBySNS from "./ShareBySNS";
import AuthorProfile from "./AuthorProfile";

const TextWrapper = styled.div`
  margin: 30px;
  p {
    font-size: 20px;
  }
  h5 {
    text-align: right;
  }
`;
const AuthorPopup = styled.div`
  opacity: 0;
`;
const Author = styled.div`
  cursor: pointer;
  &:hover > ${AuthorPopup} {
    opacity: 1;
  }
`;

export default function PostDetail() {
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
      <div
        style={{
          position: "relative",
          zIndex: "100",
        }}
      >
        <h4 style={{ marginBottom: "50px" }}>{data.post.title}</h4>

        <p>{data.post.body}</p>
        <LoremIpsum p={3} />
        <Author>
          <AuthorPopup>
            <AuthorProfile user={data.post.user} />
          </AuthorPopup>
          <h5>- {data.post.user.username} -</h5>
        </Author>
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
