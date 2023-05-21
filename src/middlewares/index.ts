import express, { Request, Response, NextFunction } from 'express';

const middleware = [
    express.json(),
    function (req: Request, res: Response, next: NextFunction) {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "*");
        res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        if (req.method === "OPTIONS") {
            return res.send(null);
        }

        next();
    },
    function (req: Request, res: Response, next: NextFunction) {
        res.set('Cache-Control', 'no-store, max-age=0')
        next()
    },
];

export { middleware };