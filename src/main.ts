// @deno-types="@types/express"
import express from "express";

import PizzaController from "@/api/pizza.controller.ts";

const app = express();

app.use("/pizza", PizzaController);

app.get("/", (req, res) => {
  res.send("Hello Deno!");
});

const PORT = Deno.env.get("PORT") || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} - http://localhost:${PORT}`);
});
