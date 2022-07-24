/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("todos").del();
  await knex("todos").insert([
    { id: 1, status: "pending", task: "Buy milk" },
    { id: 2, status: "done", task: "Uninstall Facebook" },
    { id: 3, status: "pending", task: "Buy bread" },
  ]);
};
