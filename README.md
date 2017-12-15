# dive-into-graphql

A Simple GraphQL Server implementation using Express and Node JS

# Installation
``` 
npm install
```
Run it using `node server.js` or `npm start` in the root directory of your application.

## Queries

```
{
  list {
    imdbID
    Title
    Poster
  }
  details {
    imdbID
    Title
    Director
    Released
    Website
    imdbRating
    shouldWatch
    Ratings {
      Source
    }
    Rated
  }
}
```