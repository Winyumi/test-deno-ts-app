import { Router } from "@oak/oak";

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Pasta!";
});

export default router;
