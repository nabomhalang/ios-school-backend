

import 'dotenv/config'
import { IEnv } from "./env";

export const ENV: IEnv = {
  stage: process.env.ENVIRONMENT,
  port: 8080,
  apiPath: "/api",
};