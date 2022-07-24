import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("todos", (table) => {
        table.increments("id").primary();
        table.string("status");
        table.string("task");
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists("todos");
}

