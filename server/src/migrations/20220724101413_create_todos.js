exports.up = (knex) => {
  return knex.schema.createTable("todos", (table) => {
    table.increments("id").primary();
    table.string("status");
    table.string("task");
  });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists("todos");
};
