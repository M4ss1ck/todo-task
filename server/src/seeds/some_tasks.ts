import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("todos").del();

    // Inserts seed entries
    await knex("todos").insert([
        { id: 1, status: "pending", task: "Buy milk" },
        { id: 2, status: "done", task: "Uninstall Facebook" },
        { id: 3, status: "pending", task: "Buy bread" }
    ]);
};
