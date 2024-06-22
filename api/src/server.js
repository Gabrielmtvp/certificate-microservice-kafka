import express from "express";
import { run } from "./producer/producer";
import router from "./routes";

const app = express();

app.use(router);

run().catch(console.error);
