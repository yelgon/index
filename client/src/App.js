import React from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import Blog from "./components/Blog.js";
import "./App.css";
import logo from "./logo.png";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <img
          src={logo}
          alt="indexLogo"
          style={{ display: "block", height: "100px" }}
        />
        <Blog />
      </div>
    </ApolloProvider>
  );
}

export default App;
