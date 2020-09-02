const express = require("express");
const expressGraphQL = require("express-graphql");
const schema = require("./schema.js");

const app = express();

app.use(
  "/graphql",
  expressGraphQL({
    schema: schema,
    graphiql: true,
  })
);

console.log("hello");
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
