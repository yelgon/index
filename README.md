# A JSON Placeholder GraphQL API
A simple GraphQL endpoint wrapping the *AWESOME*
<a href="https://jsonplaceholder.typicode.com/">JSONPlaceholder</a>, a fake online REST API for testing and prototyping
</br></br>
## json-placeholder-graphql
This codebase and <a href="https://json-placeholder-graphql.herokuapp.com/graphql">free tier Heroku deplyment</a> offers the GraphiQL ui as a simple sandbox to try all of the specific GET queries offered by <a href="https://jsonplaceholder.typicode.com/">JSONPlaceholder</a>.
</br></br>
## Example Queries, (Only GET has been implemented)
All Graphql queries are entered into the GraphiQL ui:

* Posts https://jsonplaceholder.typicode.com/posts/1
*<code>
{
  post(id:1){
    userId
    id
    title
    body
  }
}
</code>

* Comments https://jsonplaceholder.typicode.com/comments/1
* <code>
{
  comment(id:1){
    postId
    id
    name
    email
    body
  }
}
</code>

* Albums https://jsonplaceholder.typicode.com/albums/1
* <code>
{
  album(id: 1) {
    userId
    id
    title
  }
}
</code>

* Photos https://jsonplaceholder.typicode.com/photos/1
* <code>
{
  photo(id: 1) {
    albumId
    id
    title
    url
    thumbnailUrl
  }
}
</code>

* Todos https://jsonplaceholder.typicode.com/todos/1
* <code>
  {
  todo(id: 1) {
    userId
    id
    title
    completed
  }
}
</code>

* Users https://jsonplaceholder.typicode.com/users/1
* <code>
  {
  user(id: 1) {
    id
    username
    email
    phone
    website
  }
}
</code>
