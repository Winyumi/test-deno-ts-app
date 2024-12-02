import router from "@/router.ts";
import { Application } from "@oak/oak";

const PORT = Number(Deno.env.get("PORT")) || 3000;

const app = new Application();

app.use(router.routes());
app.listen({ port: PORT });

console.log(`Listening on port ${PORT} - http://localhost:${PORT}`);
