# TODO app

App for creating, reading, updating and deleting ToDos.

This repository contains two projects: a server and a frontend (`./server/` and `./frontend/` directories respectively).

## Requirements

This is a pnpm workspace (AKA monorepository, multi-package repository, multi-project repository, or monolithic repository), so in order to install all dependencies, you should run `pnpm i` (assuming you already did `npm install -g pnpm`).

You'll need to set up a PostgreSQL database and run migrations and seed files. Details in [server's README file](./server/README.md).

For development, run `pnpm dev`: it would start both server and frontend in development mode

## Try it out!

Want to see it in action?
Run:

```sh
pnpm build
pnpm start
```

## Endpoints

- POST request to /todos to create a new Todo item
- GET request to /todos/:id to get a Todo item by id
- PUT request to /todos/:id to update a Todo item by id
- DELETE request to /todos/:id to delete a Todo item by id
- GET request to /todos to get all the Todo items
