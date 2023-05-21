

import { NextFunction, Request, Response } from "express";
import { object, string } from "yup";

interface UserInfo {
  UUID: string,
  userEmail: string,
  userID: string,
  userPW: string,
  userName: string,
  userAvatar: any,
  userBD: any,
  userSEX: number,
  userVerified: number
}

export const post = async (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    c: 200,
    d: null,
    m: "Login Success"
  });
}
export const path = "login"
export const scheme = object({
  user: string().required(),
  pass: string().min(8).required(),
})