import { NextFunction, Request, Response } from "express";
import { InferType } from "yup";


export const validator = (req: Request, res: Response, next: NextFunction, scheme: InferType<any>) => {
    scheme.validate(req.body).then((v: any) => {
        req.body = v;
        next();
    }, (_: any) => {
        return res.status(400).json({
            c: 400,
            d: "Bad Request",
            m: "인증과정에서 무언가 잘못되었습니다."
        });
    });
}