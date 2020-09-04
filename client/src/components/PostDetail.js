import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { LoremIpsum } from "react-lorem-ipsum";
import styled from "styled-components";
import Comment from "./Comment";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
  RedditShareButton,
  RedditIcon,
  LinkedinIcon,
  LinkedinShareButton,
} from "react-share";

const TextWrapper = styled.div`
  margin: 30px;
  p {
    font-size: 20px;
  }
  h5 {
    text-align: right;
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
      <h4 style={{ marginBottom: "50px" }}>{data.post.title}</h4>
      <p>{data.post.body}</p>
      <LoremIpsum p={3} />
      <h5>- {data.post.user.username} -</h5>
      <div className="badge badge-light">Click the icon to share this post</div>
      <div>
        <FacebookShareButton
          url={"https://mighty-shore-23464.herokuapp.com/post/" + postId}
        >
          <FacebookIcon />
        </FacebookShareButton>

        <LinkedinShareButton
          url={"https://mighty-shore-23464.herokuapp.com/post/" + postId}
        >
          <LinkedinIcon />
        </LinkedinShareButton>
        <TwitterShareButton
          url={"https://mighty-shore-23464.herokuapp.com/post/" + postId}
        >
          <TwitterIcon />
        </TwitterShareButton>
        <RedditShareButton
          url={"https://mighty-shore-23464.herokuapp.com/post/" + postId}
        >
          <RedditIcon />
        </RedditShareButton>
      </div>
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
