const express = require("express");
const expressGraphQL = require("express-graphql");
const schema = require("./schema.js");
const cors = require("cors");
const path = require("path");

const app = express();

// Allow cross-origin

app.use(cors());

app.use(
  "/graphql",
  expressGraphQL({
    schema: schema,
    graphiql: true,
  })
);

app.use(express.static("public"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
