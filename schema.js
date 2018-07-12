const axios = require("axios");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require("graphql");

const jhp = "https://jsonplaceholder.typicode.com/";

const PostType = new GraphQLObjectType({
  name: "Post",
  fields: () => ({
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
        }
      },
      resolve(parentValue, args) {
        return axios.get(jhp + "posts/" + args.id).then(res => res.data);
      }
    },
    posts: {
      type: new GraphQLList(PostType),
      args: {
        userId: {
          type: GraphQLInt
        }
      },
      resolve(parentValue, args) {
        if (args.userId) {
          return axios.get(jhp + 'posts?userId='+args.userId).then(res => res.data);
        } else {
          return axios.get(jhp + 'posts').then(res => res.data);
        }
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
