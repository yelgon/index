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
  );
}
