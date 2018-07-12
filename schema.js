const axios = require('axios');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

const PostType = new GraphQLObjectType({
  name: 'Post',
  fields:() => ({
    userId: { type: GraphQLInt },
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    body: { type: GraphQLString }
  })
});

//root query

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    post: {
      type: PostType,
      args: {
        id: {
          type: GraphQLInt
        },
        userId: {
          type: GraphQLInt
        }
      },
      resolve(parentValue, args) {
        return axios
          .get("https://jsonplaceholder.typicode.com/posts/" + args.id)
          .then(res => res.data);
      }
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve(parentValue, args) {
        return axios
          .get("https://jsonplaceholder.typicode.com/posts/")
          .then(res => res.data);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
