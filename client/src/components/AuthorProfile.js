import React from "react";

export default function AuthorProfile({ user: { email, phone, website } }) {
  return (
    <div
      className="card text-white bg-primary "
      style={{
        right: "0",
        position: "absolute",
        bottom: "60px",
        padding: "20px 10px 20px 10px",
      }}
    >
      <div
        style={{ display: "grid", gridTemplateColumns: "100px max-content" }}
      >
        <p>Email</p>
        <p> {email}</p>
        <p>Phone </p>
        <p>{phone}</p>
        <p>Website</p>
        <p> {website}</p>
      </div>
    </div>
  );
}
