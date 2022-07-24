export const knexConfig = {
  client: "pg",
  connection: process.env.DATABASE_URL,
};
