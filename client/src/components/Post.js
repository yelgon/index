import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Content = styled.p`
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  margin: 10px 0 10px 0;
`;

export default function Post({ posts: { userId, user, id, title, body } }) {
  const MAX_LENGTH = 90;

  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h5 style={{ fontStyle: "italic" }}>{title}</h5>
          {body.length > MAX_LENGTH ? (
            <Content>{`${body.substring(0, MAX_LENGTH)} ....`}</Content>
          ) : (
            <Content>{body}</Content>
          )}
          <Link to={`/post/${id}`} className="btn btn-secondary mb-2">
            Read more
          </Link>
        </div>
        <div className="col-md-3">
          <h6>Author : {user.username}</h6>
        </div>
      </div>
    </div>
  );
}
