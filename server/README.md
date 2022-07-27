# ToDo app backend

REST API for a TODO app. [ExpressJS](https://expressjs.com/) server connected to a PostgreSQL database using [Knex](http://knexjs.org/) + [Objection](https://vincit.github.io/objection.js/).

## Development

Create PostgreSQL database

```
CREATE DATABASE todo
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;
```

Run migrations

```sh
cd server
knex migrate:up --client pg --connection "postgres://username:password@host:port/database" --migrations-directory src/migrations
```

Run seed files

```sh
knex seed:run --knexfile src/knexfile.js --client pg --connection "postgres://username:password@host:port/database"
```

## Endpoints

- POST request to /todos to create a new Todo item
- GET request to /todos/:id to get a Todo item by id
- PUT request to /todos/:id to update a Todo item by id
- DELETE request to /todos/:id to delete a Todo item by id
- GET request to /todos to get all the Todo items
