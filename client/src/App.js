import React from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Blog from "./components/Blog.js";
import PostContent from "./components/PostContent";

import "./App.css";
import logo from "./logo.png";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img
            src={logo}
            alt="indexLogo"
            style={{ display: "block", height: "100px" }}
          />
          <Route exact path="/" component={Blog} />
          <Route exact path="/post/:postId" component={PostContent} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
