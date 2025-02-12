import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { cors } from "hono/cors";
import soknad from "./data/soknad.json" with { type: "json" };

const api = new Hono();


// Enable CORS for all routes
api.use("/*", cors({
  origin: "http://localhost:4321",
  credentials: true,
}));

api.get('/soknadskvittering/kvittering/*', (c) => {
  console.log("kvittering")
  return c.json(soknad);
});


serve(api);
