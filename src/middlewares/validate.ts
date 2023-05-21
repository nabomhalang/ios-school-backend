import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";


export const validator = (req: Request, res: Response, next: NextFunction, scheme: AnySchema<any>) => {
    console.log(scheme, req.body)
    scheme.validate(req.body).then((v: any) => {
        req.body = v;
        next();
    }, (err: any) => {
        return res.status(400).json({
            c: 400,
            d: "Bad Request",
            m: err.message
        });
    });
}