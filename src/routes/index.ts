import { NextFunction, Request, Response, Router } from "express";
import fs from "fs";
import path from "path";
import { validator } from "../middlewares/validate";

const router: Router = Router();

const routesFiles = fs.readdirSync(path.join(__dirname, "../controllers"));
for (const routeFile of routesFiles) {
  fs.readdirSync(path.join(__dirname, `../controllers/${routeFile}`)).forEach((controller: string) => {
    const handler = require(`../controllers/${routeFile}/${controller}`);

    if (handler?.get)
      router.get(`/${routeFile}/${handler.path}`, handler.get)
    if (handler?.scheme)
      router.post(`/${routeFile}/${handler.path}`, (req: Request, res: Response, next: NextFunction) => validator(req, res, next, handler.scheme), handler.post)
    else if (handler?.post)
      router.post(`/${routeFile}/${handler.path}`, handler.post)
  });
}

export default router;