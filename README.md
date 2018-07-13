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
```
{
  post(id:1){
    userId
    id
    title
    body
  }
}
```

* Comments https://jsonplaceholder.typicode.com/comments/1
```
{
  comment(id: 1) {
    postId
    id
    name
    email
    body
  }
}
```
* Albums https://jsonplaceholder.typicode.com/albums/1
```
{
  album(id: 1) {
    userId
    id
    title
  }
}
```

* Photos https://jsonplaceholder.typicode.com/photos/1 
```
{
  photo(id: 1) {
    albumId
    id
    title
    url
    thumbnailUrl
  }
}
```

* Todos https://jsonplaceholder.typicode.com/todos/1
```
{
  todo(id: 1) {
    userId
    id
    title
    completed
  }
}
```

* Users https://jsonplaceholder.typicode.com/users/1
```
{
  user(id: 1) {
    id
    username
    email
    phone
    website
  }
}
```
