import { Router } from "@oak/oak";

import PastaController from "@/controllers/pasta.controller.ts";
import PizzaController from "@/controllers/pizza.controller.ts";

const router = new Router();

router.use("/pasta", PastaController.routes());
router.use("/pizza", PizzaController.routes());
router.get("/", (ctx) => {
  ctx.response.body = "Hello Deno!";
});

export default router;
