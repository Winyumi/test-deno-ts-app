import { env } from "@/config.ts";
import router from "@/router.ts";
import { Application } from "@oak/oak";

const app = new Application();

app.use(router.routes());
app.listen({ port: env.PORT });

console.log(`Listening on port ${env.PORT} - http://localhost:${env.PORT}`);
