

import "dotenv/config";
import { Server } from './server';
import { middleware } from './middlewares';
import { env } from "./env/env";

const app = new Server(env().port ?? 3000, middleware);

app.listen()