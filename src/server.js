import morgan from "morgan";
import express from "express";
// import express_graphql from 'express-graphql';
import cors from "cors";
// import { schema, root } from "./server-gql";
// Create an express server and a GraphQL endpoint
// console.log(schema);

// var schema = require("./server-gql");

const app = express();
// Allow cross-origin
app.use(cors());
// Log requests in console
app.use(morgan("combined"));
app.use("/", (req, res) => {
  res.send("<h2>Hello world!</h2>");
});

app.listen(3000, () =>
  console.log("Express Server Now Running On localhost:3000")
);
