

import 'dotenv/config'
import { exit } from "process";
import { IEnv } from "../interfaces/env.interface";
export { IEnv } from "../interfaces/env.interface";


export const env: () => IEnv = () => {
  if (process.env.ENVIRONMENT === "dev") {
    let env = require("./dev").ENV;
    return env;
  }
  else if (process.env.ENVIRONMENT === "prod") {
    let env = require("./prod").ENV;
    return env;
  } else {
    console.log(`ENVIRONMENT variable is not set. Please set it to 'dev' or 'prod'`);
    exit(1);
  }
}
