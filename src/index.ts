

import "dotenv/config";
import { Server } from './server';
import { middleware } from './middlewares';

const app = new Server(process.env.PORT, middleware);

app.listen();