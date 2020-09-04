import React from "react";
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

export default function ShareBySNS(props) {
  const postId = props.postId;
  return (
    <div>
      <FacebookShareButton
        url={"https://radiant-garden-98982.herokuapp.com/post/" + postId}
      >
        <FacebookIcon />
      </FacebookShareButton>

      <LinkedinShareButton
        url={"https://radiant-garden-98982.herokuapp.com/post/" + postId}
      >
        <LinkedinIcon />
      </LinkedinShareButton>
      <TwitterShareButton
        url={"https://radiant-garden-98982.herokuapp.com/post/" + postId}
      >
        <TwitterIcon />
      </TwitterShareButton>
      <RedditShareButton
        url={"https://radiant-garden-98982.herokuapp.com/post/" + postId}
      >
        <RedditIcon />
      </RedditShareButton>
    </div>
  );
}
