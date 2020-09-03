import React from "react";
import styled from "styled-components";

const Content = styled.p`
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 20px;
`;

export default function BlogDetail({
  posts: { userId, user, id, title, body },
}) {
  const MAX_LENGTH = 90;

  return (
    <div className="card card-body mb-4">
      <div className="row">
        <div className="col-md-9">
          <h5>{title}</h5>
          {body.length > MAX_LENGTH ? (
            <Content>{`${body.substring(0, MAX_LENGTH)} .....`}</Content>
          ) : (
            <Content>{body}</Content>
          )}
          <h5>Author: {user.username}</h5>
        </div>
        <div className="col-md-3">
          <button className="btn btn-secondary">Read details</button>
        </div>
      </div>
    </div>
  );
}
