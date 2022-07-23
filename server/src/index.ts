import express from "express";
import bodyParser from "body-parser";
import Knex from "knex";
import { knexConfig } from "./knexfile"
import { Model, ForeignKeyViolationError, ValidationError } from 'objection';

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

// app.get("/gateway/list", async (req, res) => {
//   const gateways = await prisma.gateway.findMany({
//     include: { peripherals: true },
//   });
//   res.json(gateways);
// });

// app.get("/gateway/:id", async (req, res) => {
//   const { id } = req.params;
//   const gateway = await prisma.gateway
//     .findUnique({
//       where: { id: id },
//       include: { peripherals: true },
//     })
//     .catch((e) => console.error(e));
//   res.json(gateway);
// });

// app.post("/gateway/new", async (req, res) => {
//   const { name, ip, peripherals } = req.body;
// });


// app.delete("/device/:id", async (req, res) => {
//   const { id } = req.params;
//   const deletedPeripheral = await prisma.peripheral
//     .delete({
//       where: {
//         id: id,
//       },
//     })
//     .catch((e) => console.log(e));
//   const parentGateway = await prisma.gateway.findUnique({
//     where: { id: deletedPeripheral?.gatewayId },
//     include: { peripherals: true },
//   });
//   if (parentGateway?.peripherals) {
//     res.json(parentGateway?.peripherals);
//   } else {
//     res.json({ error: "No peripherals found" });
//   }
// });

app.listen(3001);
console.log("Server running on port 3001");
