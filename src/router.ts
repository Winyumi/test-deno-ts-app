import PizzaController from "@/controllers/pizza.controller.ts";
import { Router } from "@oak/oak";

const router = new Router();

router.use("/pizza", PizzaController.routes());

router.get("/", (ctx) => {
  ctx.response.body = "Hello Deno!";
});

export default router;
