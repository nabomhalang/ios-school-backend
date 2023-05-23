import { NextFunction, Request, Response, Router } from "express";
import fs from "fs";
import path from "path";
import { validator } from "../middlewares/validate";

const router: Router = Router();

fs.readdirSync(path.join(__dirname, "../controllers")).forEach((routeFile: string) => {
  fs.readdirSync(path.join(__dirname, `../controllers/${routeFile}`)).forEach((controller: string) => {
    const handler = require(`../controllers/${routeFile}/${controller}`).default;

    if (handler) {
      const { path, scheme, get, post, put, delete: deleteHandler } = handler;

      if (get) {
        if (scheme) {
          router.get(`/${routeFile}/${path}`, (req: Request, res: Response, next: NextFunction) =>
            validator(req, res, next, scheme), get);
        } else {
          router.get(`/${routeFile}/${path}`, get);
        }
      }

      if (post) {
        if (scheme) {
          router.post(`/${routeFile}/${path}`, (req: Request, res: Response, next: NextFunction) =>
            validator(req, res, next, scheme), post);
        } else {
          router.post(`/${routeFile}/${path}`, post);
        }
      }

      if (put) {
        if (scheme) {
          router.put(`/${routeFile}/${path}`, (req: Request, res: Response, next: NextFunction) =>
            validator(req, res, next, scheme), put);
        } else {
          router.put(`/${routeFile}/${path}`, put);
        }
      }

      if (deleteHandler) {
        if (scheme) {
          router.delete(`/${routeFile}/${path}`, (req: Request, res: Response, next: NextFunction) =>
            validator(req, res, next, scheme), deleteHandler);
        } else {
          router.delete(`/${routeFile}/${path}`, deleteHandler);
        }
      }
    }
  });
});

export default router;