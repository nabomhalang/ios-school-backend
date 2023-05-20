import { NextFunction, Request, Response, Router } from "express";
import fs from "fs";
import path from "path";
import HandlersClass from "../model/HandlerBase";
import { validator } from "../middlewares/validate";


const router = Router();
fs.readdirSync(path.join(__dirname, "../handlers/auth")).forEach((route: string) => {
  const controller: HandlersClass = (require(path.join(__dirname, `../handlers/auth/${route}`))).default;

  console.log(controller.path, controller.post);
  if (controller?.get) router.get(controller.path, controller?.get)
  if (controller?.post) router.post(controller.path, controller?.post)
  if (controller?.put) router.put(controller.path, controller?.put)
  if (controller?.delete) router.delete(controller.path, controller?.delete)
});

export default router;