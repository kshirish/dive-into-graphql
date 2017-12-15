# dive-into-graphql

A Simple GraphQL Server implementation using Express and Node JS

# Installation
``` 
npm install
```
Run it using `node server.js` or `npm start` in the root directory of your application.

## Queries
```
query aggregatedQuery1 {
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

query aggregatedQuery2 {
  list {
    imdbID
    Title
    Poster
    detail {
      Rated
      Director
      imdbRating
    }
  }
}

query aggregatedQuery3 {
  list {
    imdbID
    Title
    Poster
    detail {
      Rated
      Director
      imdbRating
    }
  }
}
```

## Mutations
```
query simpleListQuery {
  details {
    Title    
  }
}

mutation create {
  createDetailItem(input: {
    Title: "I, Daniel Blake"
    Director: "Ken Loach"
    imdbRating: 8.2
    shouldWatch: true
  }) {
    Released
    Website
    Rated
  }
}

mutation update {
  updateDetailItem(input: {
    imdbID: "tt0758758"
    Title: "don't kill yourself"
  }) {
    Released
    Website
    Rated
  }
}

mutation delete {
  deleteDetailItem(input: {
    imdbID: "tt0758758"    
  }) {
    Released
    Website
    Rated
  }
}
```