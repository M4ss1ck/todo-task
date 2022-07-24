import express from "express";
import bodyParser from "body-parser";
import Knex from "knex";
import knexConfig from "./knexfile"
import { Model } from 'objection';
import { getToDos, getToDoById, deleteToDo, createToDo, updateToDo } from "./functions";

// Initialize knex.
const knex = Knex(knexConfig)

Model.knex(knex)


export const app = express();

app.use(bodyParser.json({ type: "application/json" }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

app.get("/todos", getToDos)
app.get("/todos/:id", getToDoById)
app.delete("/todos/:id", deleteToDo)
app.post("/todos", createToDo);
app.put("/todos/:id", updateToDo);

app.listen(3001);
console.log("Server running on port 3001");
